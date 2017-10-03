import {NEW_GAME, newGame, MAKE_GUESS, makeGuess, TOGGLE_INFO_MODAL, toggleInfoModal} from './actions';

describe('newGame', () => {
	it('Should return the action', () => {
		const action = newGame();
		expect(action.type).toEqual(NEW_GAME);
		expect(action.correctAnswer).toBeLessThan(100);
		expect(action.correctAnswer).toBeGreaterThan(0);
	});
});

describe('makeGuess', () => {
	it('Should return the action', () => {
		const guess = Math.round(Math.random() * 100);
		const action = makeGuess(guess);
		expect(action.type).toEqual(MAKE_GUESS);
		expect(action.guess).toEqual(guess);
		expect(action.guess).toBeLessThan(100);
		expect(action.guess).toBeGreaterThan(0);
	});
});

describe('toggleInfoModal', () => {
	it('Should return the action', () => {
		const action = toggleInfoModal();
		expect(action.type).toEqual(TOGGLE_INFO_MODAL);
	});
});