import useAuthContext from "../contexts/AuthContext/AuthContext";
import Field from "./Field";
import Select from "./Select";
import Textarea from "./TextArea";

export default function TipAddForm({
  handleTipSubmit,
  tipDetail = null,
  submitString,
}) {
  const { user } = useAuthContext();
  return (
    <form
      onSubmit={handleTipSubmit}
      className="mx-auto  w-full max-w-[24rem] text-black"
    >
      <Field
        label="Title"
        id="title"
        name="title"
        className="custom-input"
        required
        defaultValue={tipDetail ? tipDetail.title : ""}
      />
      <Field
        label="Plant Type"
        id="plantType"
        name="plantType"
        className="custom-input"
        required
        defaultValue={tipDetail ? tipDetail.plantType : ""}
      />
      <Select
        className="custom-input text-xs"
        required
        label="Difficulty Level"
        id="difficultyLevel"
        name="difficultyLevel"
        defaultValue={tipDetail ? tipDetail.difficultyLevel : ""}
      >
        <option value="">Select One</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </Select>
      <Textarea
        className=" bg-white text-black my-2 px-2 w-full h-20 border-none rounded-sm"
        label="Description"
        id="description"
        name="description"
        defaultValue={tipDetail ? tipDetail.description : ""}
        required
      ></Textarea>
      <Field
        className="custom-input"
        label="Image Url"
        id="image_url"
        name="image_url"
        required
        defaultValue={tipDetail ? tipDetail.image_url : ""}
      />
      <Select
        className="custom-input text-xs"
        required
        label="Category"
        id="category"
        name="category"
        defaultValue={tipDetail ? tipDetail.category : ""}
      >
        <option value="">Select One</option>
        <option value="composting">Composting</option>
        <option value="plant-care">Plant Care</option>
        <option value="care">Care</option>
        <option value="planting">Planting</option>
        <option value="maintenance">Maintenance</option>
        <option value="supporting">Supporting</option>
        <option value="vertical-gardening">Vertical Gardening</option>
      </Select>
      <Select
        className="custom-input text-xs"
        required
        label="Availability"
        id="availability"
        name="availability"
        defaultValue={tipDetail ? tipDetail.availability : ""}
      >
        <option value="">Select One</option>
        <option value="public">Public</option>
        <option value="hidden">Hidden</option>
      </Select>
      <Field
        className="custom-input"
        label="Username"
        id="username"
        name="username"
        readOnly
        value={user.displayName}
      />
      <Field
        className="custom-input"
        label="Email"
        id="email"
        name="email"
        readOnly
        value={user.email}
      />
      <input type="submit" className="w-full submit-btn" value={submitString} />
    </form>
  );
}
