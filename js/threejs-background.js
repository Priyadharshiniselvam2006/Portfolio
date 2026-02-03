/**
 * Shared Three.js Background Utilities
 * Provides optimized particle background animation with device-adaptive settings
 */

// Device detection
function isMobileDevice() {
    return window.innerWidth < 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Get optimal particle count based on device
function getOptimalParticleCount() {
    const isMobile = isMobileDevice();
    return isMobile ? 500 : 2000;
}

// Get optimal pixel ratio
function getOptimalPixelRatio() {
    const isMobile = isMobileDevice();
    return isMobile ? 1 : Math.min(window.devicePixelRatio, 2);
}

// Get optimal particle size
function getOptimalParticleSize() {
    const isMobile = isMobileDevice();
    return isMobile ? 0.8 : 1;
}

// Initialize Three.js scene with performance optimizations
function initOptimizedThreeJSBackground(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error(`Canvas with id "${canvasId}" not found`);
        return null;
    }

    // Check WebGL support
    function checkWebGLSupport() {
        try {
            const testCanvas = document.createElement('canvas');
            const context = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
            return !!context;
        } catch (e) {
            return false;
        }
    }

    if (!checkWebGLSupport()) {
        console.log('WebGL not supported, skipping Three.js background');
        return null;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    let renderer;
    try {
        renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: false,
            powerPreference: "high-performance",
            failIfMajorPerformanceCaveat: false
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(getOptimalPixelRatio());

        // Handle context loss
        canvas.addEventListener('webglcontextlost', (event) => {
            event.preventDefault();
            console.log('WebGL context lost');
        }, false);

    } catch (error) {
        console.error('WebGL renderer failed:', error);
        return null;
    }

    // Create particle system
    const particleCount = getOptimalParticleCount();
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Color palette
    const colorPalette = [
        [0, 0.83, 1],      // Accent (cyan)
        [0.06, 0.73, 0.51], // Success (green)
        [0.96, 0.62, 0.04]  // Warning (orange)
    ];

    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 200;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 200;

        const colorChoice = Math.floor(Math.random() * colorPalette.length);
        colors[i * 3] = colorPalette[colorChoice][0];
        colors[i * 3 + 1] = colorPalette[colorChoice][1];
        colors[i * 3 + 2] = colorPalette[colorChoice][2];
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: getOptimalParticleSize(),
        transparent: true,
        opacity: 0.8,
        vertexColors: true
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.z = 50;

    // Animation
    let animationId;
    function animate() {
        animationId = requestAnimationFrame(animate);

        if (particles) {
            particles.rotation.x += 0.0005;
            particles.rotation.y += 0.001;

            // Dynamic particle movement
            const positions = particles.geometry.attributes.position.array;
            for (let i = 0; i < positions.length; i += 3) {
                positions[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.01;
            }
            particles.geometry.attributes.position.needsUpdate = true;
        }

        renderer.render(scene, camera);
    }

    animate();

    // Resize handler
    function handleResize() {
        if (camera && renderer) {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(getOptimalPixelRatio());
        }
    }

    window.addEventListener('resize', handleResize);

    // Cleanup function
    function cleanup() {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
        window.removeEventListener('resize', handleResize);
        if (renderer) {
            renderer.dispose();
        }
        if (geometry) {
            geometry.dispose();
        }
        if (material) {
            material.dispose();
        }
    }

    return {
        scene,
        camera,
        renderer,
        particles,
        cleanup
    };
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initOptimizedThreeJSBackground,
        isMobileDevice,
        getOptimalParticleCount,
        getOptimalPixelRatio,
        getOptimalParticleSize
    };
}
