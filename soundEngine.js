/**
 * soundEngine - Basic Sound Playback Manager
 * Author: IlReDelTrucco
 * License: Custom
 */

const soundEngine = {
    /**
     * Plays a sound from the given source file.
     * @param {string} src - Path to the audio file.
     * @param {number} [volume=1] - Volume level (0.0 to 1.0).
     */
    play(src, volume = 1) {
        if (typeof src !== 'string' || src.trim() === '') {
            console.error('[soundEngine] Invalid audio source.');
            return;
        }
        if (typeof volume !== 'number' || volume < 0 || volume > 1) {
            volume = 1;
        }

        const audio = new Audio(src);
        audio.volume = volume;
        audio.play().catch(err => {
            console.error('[soundEngine] Failed to play sound:', err);
        });
    }
};

// Example usage:
// soundEngine.play('assets/sounds/click.mp3', 0.8);

module.exports = soundEngine;
