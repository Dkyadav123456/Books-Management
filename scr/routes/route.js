const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const bookController = require("../controllers/bookController");
const reviewController = require("../controllers/reviewController");
const middleware = require("../middleware/auth");

//*********************************[User-Api's]***********************************//
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);

//*******************************[Books-Api's]************************************//
router.post("/books", middleware.authentication, bookController.createBook);
router.get("/books", middleware.authentication, bookController.getBooks);
router.get(
  "/books/:bookId",
  middleware.authentication,
  bookController.getBooksById
);
router.put(
  "/books/:bookId",
  middleware.authentication,
  middleware.authorisation,
  bookController.updateBook
);
router.delete(
  "/books/:bookId",
  middleware.authentication,
  middleware.authorisation,
  bookController.deleteBook
);

//*******************************[Review-Api's]***********************************//
router.post("/books/:bookId/review", reviewController.createReview);
router.put("/books/:bookId/review/:reviewId", reviewController.reviewUpdate);
router.delete("/books/:bookId/review/:reviewId", reviewController.deleteReview);

//***************************[Invalid Or Wrong Url]*******************************//
//it is a optional
// if api is invalid OR wrong URL
router.all("/*", function (req, res) {
  res
    .status(404)
    .send({ status: false, msg: "The api you requested is not available" });
});

module.exports = router;
