import { Application } from '../Models/ApplicationModel.js';


const ApplicationController = async (req, res) => {
    try {


        
       
        const { fullname, phonenumber, email, location,reason,fundamount } = req.body;

        
        if (!fullname || !phonenumber || !email || !reason ||!location || !fundamount) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

      

       

        
        const application = new Application({fullname, phonenumber, email, location,reason,fundamount });
        await application.save();
        return res.status(200).json({ success: true, message: 'Application for donation submitted successfully'});
        
     
        

        

    } catch (error) {
        console.error('Error during application submiting:', error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};




 





export { ApplicationController };