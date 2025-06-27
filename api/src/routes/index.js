import express from "express";
import paciente from "./pacienteRoutes.js";

const routes = (app) => {
    app.route("/api").get((req, res) => {
        res.status(200).json({titulo: "API de espera de hospital"})
    })

    app.use(
        express.json(),
        paciente
    )
}

export default routes;