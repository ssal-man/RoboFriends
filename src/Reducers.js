import { CHANGE_SEARCHFIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_REJECT } from './constansts';

const initialStateSearch = {
    searchfield : ''
}

export const searchRobots = ( state=initialStateSearch , action={}) =>{
    switch(action.type){
        case CHANGE_SEARCHFIELD :
            return Object.assign({},state,{searchfield:action.payload});
        default:
            return state;    
    }
}

const initialStateRobots = {
    isPending : false,
    robots:[],
    error:''
}
export const requestRobots = (state=initialStateRobots , action={}) =>{
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({},state,{isPending:true})
        case REQUEST_ROBOTS_SUCCESS:
                return Object.assign({},state,{isPending:false , robots:action.payload})
        case REQUEST_ROBOTS_REJECT:
            return Object.assign({},state,{isPending:false , error : action.payload})
        default:
            return state                        
    }
}