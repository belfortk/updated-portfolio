import projects from '../../Projects/projects';

const initialState ={
    projects: projects(),
    selectedProjectId: ''

}

export default function HomeReducer(store = initialState, action){
    const {type, payload } = action;

    switch(type){
        case 'TEST' : {
            return {
                ...store,
                new: payload
            };
        }

        default: {
            return store;
        }
    }
}