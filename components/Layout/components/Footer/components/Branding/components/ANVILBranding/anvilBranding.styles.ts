import { Logo } from "@databiosphere/findable-ui/lib/components/Layout/components/Header/components/Content/components/Logo/logo";
import { mediaTabletDown } from "@databiosphere/findable-ui/lib/styles/common/mixins/breakpoints";
import styled from "@emotion/styled";

export const Brands = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;

  img {
    margin: 0;
  }

  ${mediaTabletDown} {
    a {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

export const NHGRILogo = styled(Logo)`
  padding: 8px;

  ${mediaTabletDown} {
    img {
      height: 20px;
    }
  }
`;

export const NIHLogo = styled(Logo)`
  padding: 8px;

  ${mediaTabletDown} {
    img {
      height: 20px;
    }
  }
`;

export const HHSLogo = styled(Logo)`
  padding: 4px;

  ${mediaTabletDown} {
    img {
      height: 28px;
    }
  }
`;

export const USAGOVLogo = styled(Logo)`
  padding: 4px;

  ${mediaTabletDown} {
    img {
      height: 28px;
    }
  }
`;
