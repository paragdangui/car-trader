export const useUtilities = () => {
	function toTitleCase(str) {
		return str.replace(/\w\5*/g, function (txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	}


	return {
		toTitleCase,
	}
}