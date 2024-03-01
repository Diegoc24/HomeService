const budget = require("./model/budget")
const admin = require("./model/admin")
const bill = require("./model/bill")
const client = require("./model/client")
const contact = require("./model/contact")
const job = require("./model/job")
const employee = require("./model/employee")


admin.belongsToMany(client, {as: "clients", through: "admin_id"})
client.belongsTo(admin, {as: "admin", through: "admin_id"})

admin.belongsToMany(contact, {as: "contacts", through: "admin_id"})
contact.belongsTo(admin, {as: "admin", through: "admin_id"})

client.belongsToMany(job, {as: "jobs", through: "client_id"})
job.belongsTo(client, {as: "client", through: "client_id"})

job.belongsToMany(employee, {through: "Jobing", as:"jobs", foreignKey: "job_id"})
employee.belongsToMany(job, {through: "Jobing", as: "employee", foreignKey: "employee_id"})

client.belongsToMany(bill, {as: "bill", through: "client_id"})
bill.belongsTo(client, {as:"client", through:"client_id"})

client.belongsToMany(budget, {as: "budget", through: "client_id"})
budget.belongsTo(client, {as:"client", through:"client_id"})