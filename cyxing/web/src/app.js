var state={
    index_show:false
}

var mutations={
    refresh(){
        // state.index_show=true;
    }
}

var actions={
    refresh(context){
        context.commit('refresh');
    }
}

export default{
    state,
    mutations,
    actions
}