import { Divider } from "@mui/material";
import Grid from "@mui/material/Grid";

import {
  chapters,
  classes,
  level,
  subjects,
  topics,
  types,
} from "../../constants/const";
import CheckboxesTags from "./Checkbox";
import RichText from "./RichText";

const allBoxes = [
  {
    name: "types",
    options: types,
    multiple: false,
  },
  {
    name: "classes",
    options: classes,
    multiple: false,
  },
  {
    name: "subjects",
    options: subjects,
    multiple: false,
  },
  {
    name: "chapters",
    options: chapters,
    multiple: false,
  },
  {
    name: "topics",
    options: topics,
    multiple: false,
  },
  {
    name: "level",
    options: level,
    multiple: false,
  },
];

const add_questions = () => {
  return (
    <>
      <h3>Add question</h3>
      <Grid container spacing={3}>
        {allBoxes.map((box, index) => {
          return (
            <Grid item xs={12} md={6} xl={3}>
              <CheckboxesTags
                options={box.options}
                lebel={box.name}
                multiple={box.multiple}
              />
            </Grid>
          );
        })}
        {/* <Grid item xs={12} md={6} xl={3}>
        <CheckboxesTags options={types} lebel="types" />
      </Grid>
      <Grid item xs={12} md={6} xl={3}>
        <CheckboxesTags options={classes} lebel="classes" />
      </Grid>
      <Grid item xs={12} md={6} xl={3}>
        <CheckboxesTags options={subjects} lebel="subjects" />
      </Grid>
      <Grid item xs={12} md={6} xl={3}>
        <CheckboxesTags options={topics} lebel="topics" />
      </Grid>
      <Grid item xs={12} md={6} xl={3}>
        <CheckboxesTags options={chapters} lebel="chapters" />
      </Grid>
      <Grid item xs={12} md={6} xl={3}>
        <CheckboxesTags options={level} lebel="level" />
      </Grid> */}
      </Grid>
      <h3>Question</h3>
      <Divider />

      <RichText />
    </>
  );
};

export default add_questions;
