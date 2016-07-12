// a reducer takes in two things:
// 1. the action (info about what happend)
// 2. copy of current state

export function posts(state = [], action) {
    console.log(state, action);
    console.log('post will change');
    return state;
}

export default posts;
