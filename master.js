/** @param {NS} ns **/
export async function main(ns) {
	let file = ns.read("list.txt")
	let num = ns.args[0] || 1 

	let rows = file.split("\n")
	for (let i = 0; i < rows.length; i++) {
		let target = rows[i]
		ns.print(`Running ${target}`)
		let moneyThresh = ns.getServerMaxMoney(target) * 0.75;
		let securityThresh = ns.getServerMinSecurityLevel(target) + 5;
		ns.run("slave.js", num, target, moneyThresh, securityThresh)
		ns.print(`Done`)
	}
}
