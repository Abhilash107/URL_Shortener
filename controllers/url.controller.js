
import {URL} from '../models/url.model.js';




const generateNewURL = async function handleGenerateNewShortURL(req, res){
    const body = req.body
    if(!body.url) return res.status(400).json({message: "URL is required"})

    const shortId = new ShortUniqueId({length: 10});
    const generatedURL = await URL.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: []
    })
    if(!generatedURL) return res.status(500).json({message: "Internal server error"})
    return res.status(201).json({shortId: generatedURL.shortId})

}

export{generateNewURL}