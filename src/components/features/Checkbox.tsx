import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
type Props = {
  options: { title: string; year: number }[];
  lebel: String;
  multiple?: boolean;
  checked?: boolean;
};
export default function CheckboxesTags({
  options,
  lebel,
  multiple = false,
  checked = false,
}: Props) {
  return (
    <Autocomplete
      multiple={multiple}
      id="checkboxes-tags-demo"
      options={options}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          {checked && (
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
          )}
          {option.title}
        </li>
      )}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={lebel} />}
    />
  );
}
