import Conversations from "./Conversations";
import LogoutBotton from "./LogoutBotton";

import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col'>
			<SearchInput />
			<div className='divider px-3'></div>
			 <Conversations />
			<LogoutBotton/>
		</div>
	);
};
export default Sidebar;