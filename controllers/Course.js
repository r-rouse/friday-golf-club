const { Course, Hole } = require('../models');



const GetAllCourse = async (req, res) => {
    try {
        const Courses = await Course.findAll({
            include: [{
                model: Hole,
                as: 'holes' // This should match the alias you used in the association definition
            }]
        });
        res.send(Courses);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}


const CreateCourse = async (req, res) => {
    console.log(req)
    try {
      let newCourse = await Course.create(req.body);
      res.send(newCourse);
    } catch (error) {
      throw error;
    }
  };
  const deleteAllCourses = async (req, res) => {
    try {
        // Perform the deletion
        await Course.destroy({
            where: {}, // An empty where object will match all records
        });

        // Respond to the request indicating success
        res.status(200).send({
            message: "All courses have been deleted successfully."
        });
    } catch (error) {
        // Handle any errors that occur during the process
        console.error("Error deleting courses: ", error);
        res.status(500).send({
            message: "An error occurred while trying to delete all courses."
        });
    }
};


module.exports = {
    GetAllCourse,
    CreateCourse,
    deleteAllCourses

}