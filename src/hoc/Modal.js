import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

const modal = props => {
  const { children, open, handleClose } = props;
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => handleClose(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
};

export default modal;
