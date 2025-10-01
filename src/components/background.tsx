import Particles from './particles';
export default function Backgroundpariticles() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={2900}
                particleSpread={5}
                speed={0.01}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
            />
        </div>
    );
}