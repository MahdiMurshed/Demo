import {
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
type options = {
  lebel: string;
  icon: any;
};
const getItems = (drawerOptions: any) => {
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {drawerOptions.map((item: options) => (
          <ListItem
            button
            key={item.lebel}
            onClick={() => console.log("clicked")}
          >
            <ListItemIcon
              sx={{
                color: "white",
              }}
            >
              {<item.icon />}
            </ListItemIcon>
            <ListItemText primary={item.lebel} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
  return drawer;
};

export default getItems;
