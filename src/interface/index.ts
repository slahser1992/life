import { RouterStore } from "../store";
import { RouteComponentProps } from "react-router";

export interface Global extends RouteComponentProps<{}>{
	router: RouterStore;
}
