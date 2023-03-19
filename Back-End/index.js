const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const accountRoute = require("./routes/Account");
const bookingScheduleRoute = require("./routes/BookingSchedule");
const CareerRoute = require("./routes/Career");
const DistrictRoute = require("./routes/District");
const EquipmentRoute = require("./routes/Equipment");
const EvaluateRoute = require("./routes/Evaluate");
const FavoriteRoomRoute = require("./routes/FavoriteRoom");
const ImageRoute = require("./routes/Image");
const ImagesCMNDRoute = require("./routes/ImagesCMND");
const PermissionRoute = require("./routes/Permission");
const PositionRoute = require("./routes/Position");
const ProvinceRoute = require("./routes/Province");
const RoomCareerRoute = require("./routes/Room-Career");
const RoomRoute = require("./routes/Room");
const RoomDetailRoute = require("./routes/RoomDetail");
const ServicePackRoute = require("./routes/ServicePack");
const ServicePackInUseRoute = require("./routes/ServicePackInUse");
const StaffRoute = require("./routes/Staff");
const TimeSlotRoute = require("./routes/TimeSlot");
const WardRoute = require("./routes/Ward");
const WorkAssignmentRoute = require("./routes/WorkAssignment");
const WorkingHoursRoute = require("./routes/WorkingHours");

dotenv.config();
const app = express();

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://lehuynhphuongtung0601:Tung0601@cluster0.7jizcdt.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("DB connected");
  }
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use("/account", accountRoute);
app.use("/bookingschedule", bookingScheduleRoute);
app.use("/career", CareerRoute);
app.use("/district", DistrictRoute);
app.use("/equipment", EquipmentRoute);
app.use("/evaluate", EvaluateRoute);
app.use("/favoriteroom", FavoriteRoomRoute);
app.use("/image", ImageRoute);
app.use("/imagescmnd", ImagesCMNDRoute);
app.use("/permission", PermissionRoute);
app.use("/position", PositionRoute);
app.use("/province", ProvinceRoute);
app.use("/roomcareer", RoomCareerRoute);
app.use("/room", RoomRoute);
app.use("/roomdetail", RoomDetailRoute);
app.use("/servicepack", ServicePackRoute);
app.use("/servicepackinuse", ServicePackInUseRoute);
app.use("/staff", StaffRoute);
app.use("/timeslot", TimeSlotRoute);
app.use("/ward", WardRoute);
app.use("/workassignment", WorkAssignmentRoute);
app.use("/workinghours", WorkingHoursRoute);

app.listen(8000, () => {
  console.log("Server is running...");
});
