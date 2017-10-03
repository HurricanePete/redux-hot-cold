import {newGame, makeGuess, toggleInfoModal} from './actions';
import {hotColdReducer} from './reducer';

describe('hotColdReducer', () => {
	const guess = Math.round(Math.random() * 100);
	const initialState = {
			guesses: [],
			feedback: 'Make your guess!',
			correctAnswer: Math.round(Math.random() * 100),
			showInfoModal: false
		};

	const testGuesses = [61, 41, 21, 11, 10];	
	const possibleFeedback = ['You\'re Ice Cold...', 'You\'re Cold...', 'You\'re Warm', 'You\'re Hot!', 'You got it!'];

	it('Should set the initial state when no action is passed', () => {
		const state = hotColdReducer(undefined, {type: '_UNKNOWN'});
		expect(state).toMatchObject({
			guesses: [],
			feedback: 'Make your guess!',
			showInfoModal: false
		});
		expect(state.correctAnswer).toBeLessThan(100);
		expect(state.correctAnswer).toBeGreaterThan(0);
	});

	it('Should return the current state on an unknown action', () => {
		const state = hotColdReducer(initialState, {type: '__UNKNOWN'});
		expect(state).toBe(initialState);
	});

	describe('makeGuess', () => {
		it('Should update feedback correctly on guess', () => {
			let state = initialState;
			state.correctAnswer = 10;
			for(let i=0; i<testGuesses.length; i++) {
				state = hotColdReducer(state, makeGuess(testGuesses[i]));
				expect(state.feedback).toEqual(possibleFeedback[i]);
			};
		});

		it('Should update guesses correctly on guess', () => {
			let state = initialState;
			for(let i=0; i<testGuesses.length; i++) {
				state = hotColdReducer(state, makeGuess(testGuesses[i]));
			};
			expect(state.guesses).toEqual(testGuesses);
		});

		it('Should return instructions if a guess is not a valid number', () => {
			let state = initialState;
			state = hotColdReducer(state, makeGuess('test'));
			expect(state.feedback).toEqual('Please enter a valid number');
		})
	});

	describe('toggleInfoModal', () => {
		it('Should toggle between true and false when fired', () =>{
			let state = initialState;
			state = hotColdReducer(state, toggleInfoModal());
			expect(state.showInfoModal).toBeTruthy();
			state = hotColdReducer(state, toggleInfoModal());
			expect(state.showInfoModal).toBeFalsy();
		})
	})

	describe('newGame', () => {
		it('Should reset state to initial state', () => {
			let state = initialState;
			for(let i=0; i<=5; i++) {
				state = hotColdReducer(state, makeGuess(Math.round(Math.random() * 100)));
			};
			state = hotColdReducer(state, newGame());
			expect(state).toMatchObject({
				guesses: [],
				feedback: 'Make your guess!',
				showInfoModal: false
			});
			expect(state.correctAnswer).toBeLessThan(100);
			expect(state.correctAnswer).toBeGreaterThan(0);
		});
	});
});