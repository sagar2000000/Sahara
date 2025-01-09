import express from "express"


import { ApplicationController } from "../Controllers/ApplicationController.js"


const ApplicationRouter =express.Router()



ApplicationRouter.post('/submission',ApplicationController)



export default ApplicationRouter;