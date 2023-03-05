const express = require("express");
const {
  createCar,
  getCars,
  updateCar,
  deleteCar,
  getRequiredCar,
  sortRentASC,
  sortRentDESC,
} = require("../controllers/carController");
const authorized = require("../middleware/authentication");
const router = express.Router();

router
  .route("/admin/car/new")
  .post(authorized.myAuth, authorized.authorizedRoles("admin"), createCar);

router
  .route("/admin/car/:id")
  .put(authorized.myAuth, authorized.authorizedRoles("admin"), updateCar)
  .delete(authorized.myAuth, authorized.authorizedRoles("admin"), deleteCar);

router.route("/cars").get(getCars);
router.route("/car/:id").get(getRequiredCar);

router.route("/cars/sort/ascending").get(sortRentASC);
router.route("/cars/sort/descending").get(sortRentDESC);
module.exports = router;
