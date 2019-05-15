import { History } from "history";
import { RouterStore as BaseRouterStore, syncHistoryWithStore } from "mobx-react-router";

class RouterStore extends BaseRouterStore {
	public history: any;
	constructor(history?: History) {
		super();
		if (history) {
			this.history = syncHistoryWithStore(history, this);
		}
	}
}

export default RouterStore;
