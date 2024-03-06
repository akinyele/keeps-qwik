import {CardContent, styled} from "@mui/material";

const CardContentNoPadding = styled(CardContent)(`
  &:last-child {
    padding-bottom: 16px;
  }
`);

export default CardContentNoPadding