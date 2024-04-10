import * as webServiceServices from './../services/web-service-services.js';
import { setResponse, setError } from './response-handler.js';




export const search = async (request, response) => {
    try {
        const queryParams = { ...request.query };

        // Extracting search criteria from query parameters
        // const { title, content, actionItemText, startDate, endDate, searchData } = queryParams;

        // Constructing the search query
        const searchQuery = {};

        //         if (title) {
        //             searchQuery.title = { $regex: title, $options: 'i' }; // Case-insensitive regex search for title
        //         }

        //         if (content) {
        //             searchQuery.content = { $regex: content, $options: 'i' }; // Case-insensitive regex search for content
        //         }

        //         if (actionItemText) {
        //             searchQuery['actionItems.text'] = { $regex: actionItemText, $options: 'i' }; // Case-insensitive regex search for action item text
        //         }

        //         if (startDate && endDate) {
        //             // Convert start and end dates to Date objects
        //             const startDateObj = new Date(startDate);
        //             const endDateObj = new Date(endDate);

        //             // Increment end date by one day to include notes created on endDate
        //             endDateObj.setDate(endDateObj.getDate() + 1);

        //             // Filter notes created between startDate and endDate (inclusive)
        //             searchQuery.creationDate = { $gte: startDateObj, $lt: endDateObj };
        //         }

        //         if (searchData) {
        //             const regexPattern = new RegExp(searchData, 'i'); // Create a RegExp object with 'i' flag for case-insensitive search
        //             searchQuery.$or = [
        //                 { title: { $regex: regexPattern } }, // Search title
        //                 { content: { $regex: regexPattern } }, // Search content
        //                 { 'actionItems.text': { $regex: regexPattern } } // Search action item text

        //             ];
        //         }

        // Perform the search using the constructed query
        const notes = await webServiceServices.search(searchQuery);

        // Send the search results as response
        setResponse(notes, response);
    } catch (error) {
        console.log(error);
        setError(response);
    }
}