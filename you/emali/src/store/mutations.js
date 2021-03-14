
export default {
    ELIMINATE(state, payload) {
        state.Email.emailArr.map((value) => {
            if (value.bg !== "undefined") {
                payload.$delete(value, 'bg');
            }
        })
    },
    ADDJUDGE(state,payload){
        if ( state.Email.str == ";" ||  state.Email.str == "") {
            state.Email.str = "";
            return "";
          }
          let bottomstr =  state.Email.str.slice(-1);
          console.log(bottomstr)
          if (bottomstr !== ";") {
            state.Email.str += ";";
            payload.$store.commit('ADD')
          }
    },
    ADD(state,payload){
        let ne2 = 0;
        let ne1 = 0;
        let type = 0;
        if (!state.Email.filter.test(state.Email.str)) {
          type = 1;
        }
        let int = state.Email.str.indexOf("@");
        ne2 = state.Email.str.slice(int);
        ne1 =state.Email.str.slice(0, int);
        if (int == "-1") {
          ne2 = "";
          ne1 = state.Email.str.slice(0);
          type = 2;
        }
  
        let obj = {
          name: ne1,
          suffix: ne2,
          id: state.Email.emailArr.length,
          type: type,
        };
        let keypush = true;
        for (let i = 0; i < state.Email.emailArr.length; i++) {
          if (state.Email.emailArr[i].name + state.Email.emailArr[i].suffix ===state.Email.str) {
            keypush = false;
          }
        }
        if (keypush) {
            state.Email.emailArr.push(obj);
        }
        state.Email.str = "";
    },
    SET_EMAILSTR(state,payload){
        state.Email.str = payload
    }

}