/** @param {NS} ns **/
export async function main(ns) {
	var target = ns.args[0];
	var moneyThresh = ns.args[1];
	var securityThresh = ns.args[2];

	// Infinite loop that continously hacks/grows/weakens the target server
	while(true) {
		if (ns.getServerSecurityLevel(target) > securityThresh) {
			// If the server's security level is above our threshold, weaken it
			await ns.weaken(target);
		} else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
			// If the server's money is less than our threshold, grow it
			await ns.grow(target);
		} else {
			// Otherwise, hack it
			await ns.hack(target);
		}
	}
}
