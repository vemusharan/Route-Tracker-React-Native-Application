import { NavigationActions } from "react-navigation";

// Clever function to get access to navigator
// inside the react navigation documentation we are having a guide on how to do so

let navigator; // to reassign the vatiable in future

export const setNavigator = (nav) => {
  navigator = nav;
  // nav will be coming fromreact navigation taht will allow
  // to navigate around different screens
};

export const navigate = (routeName, params) => {
  // to trigger the navigation we will call the navigator.dispatch()#
  navigator.dispatch(
    NavigationActions.navigate({
      routeName: routeName,
      params: params,
    })
  );
};
