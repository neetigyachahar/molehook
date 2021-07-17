const express = require("express")

module.exports = {
    name: "www",

    settings: {
        port: process.env.PORT || 3000
    },

    methods: {
        initRoutes(app) {
            app.get("/register", this.register)
            app.get("/udpate", this.udpate)
            app.get("/list", this.list)
            app.get("/delete", this.delete)
            app.get("/trigger", this.trigger)
        },
        async register(req, res) {
            try {
                //    Call broker here 
                return res.status(200).json({ status: "ok" })
            } catch (error) {
                return this.handleErr(error)
            }
        },
        async udpate(req, res) {
            try {
                //    Call broker here 
                return res.status(200).json({ status: "ok" })
            } catch (error) {
                return this.handleErr(error)
            }
        },
        async list(req, res) {
            try {
                //    Call broker here 
                return res.status(200).json({ status: "ok" })
            } catch (error) {
                return this.handleErr(error)
            }
        },
        async delete(req, res) {
            try {
                //    Call broker here 
                return res.status(200).json({ status: "ok" })
            } catch (error) {
                return this.handleErr(error)
            }
        },
        async trigger(req, res) {
            try {
                //    Call broker here 
                return res.status(200).json({ status: "ok" })
            } catch (error) {
                return this.handleErr(error)
            }
        },
        handleErr(res) {
            return () => {
                res.status(500).json()
            }
        },
    },

    created() {
        const app = express()
        this.initRoutes(app)
        this.app = app
    },

    started() {
        this.app.listen(Number(this.settings.port), (err) => {
            if (err) throw err
            console.log(`listening on port ${this.settings.port}`)
        })
    },
    stopped() {
        if (this.app.listening) {
            this.app.close((err) => {
                if (err) return err
                console.log("Server stopped")
            })
        }
    },
}