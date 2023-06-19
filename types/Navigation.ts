type GenericObject = {
  [key: string]: any;
};

type NavigateWithParams<RouteParams = GenericObject> = (
  screenName: string,
  routeParams?: RouteParams,
) => void;

export interface NavigationScreenProps<RouteParams = GenericObject> {
  navigation: {
    push: NavigateWithParams<RouteParams>;
    goBack: () => void;
    navigate: NavigateWithParams<RouteParams>;
  };
  route: {
    params: RouteParams;
  };
}
