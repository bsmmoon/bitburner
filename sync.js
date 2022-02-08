/** @param {NS} ns **/
export async function main(ns) {
	let file = ns.read("list.txt")

	let rows = file.split("\n")

	for (let i = 0; i < rows.length; i++) {
		let host = rows[i]
		ns.print(`KILL ALL ${host}`)
		await ns.killall(host)
		ns.print(`Done`)
	}

	for (let i = 0; i < rows.length; i++) {
		let host = rows[i]
		ns.print(`Sync ${host}`)
		await ns.scp(["list.txt", "master.js", "slave.js"], host)
		await ns.exec("master.js", host)
		ns.print(`Done`)
	}
}
