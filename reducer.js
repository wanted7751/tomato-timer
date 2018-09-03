// import


// Actions

const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SEOND = 'ADD_SECOND';

// Action Creators

function startTimer(){
    return {
        type: START_TIMER
    };
}

function restartTimer(){
    return{
        type: RESTART_TIMER
    };  
}

function addSecond(){
    return {
        type: ADD_SEOND
    };
}


// Reducer

const TIME_DURATION = 1500;

const initialState = {
    isPlaying: false,
    elapsedTime: 0,
    timerDuration: TIME_DURATION
}

function reducer(state = initialState, action){
    switch(action.type){
        case START_TIMER:
            return applyStartTimer(state, action);
        case RESTART_TIMER:
            return applyStartTimer(stat, action);
        case ADD_SEOND:
            return applyStartTimer(state);
    }
}

// Reducer Functions

function applyStartTimer(state){
    return{
        ...state,
        isPlaying: true,

    };
    
}

function applyRestartTimer(state){
    return{
        ...state,
        isPlaying: false,
        elapsedTime: 0
    };
}

function applyAddSecond(state){
    if(state.elapsedTime < TIMER_DURATION){
        return {
            ...state,
            elapsedTime: sate.elapsedTime + 1
        };
    } else {
        return {
            ...state,
            isPlaying: false
        };
    }
}
// Export Action Creators

const actionCreators = {
    startTimer,
    restartTimer,
    addSecond
}


// Export Reducer

export default reducer;