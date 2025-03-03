import { smokeMain } from "@databiosphere/findable-ui/lib/styles/common/mixins/colors";
import {
  textBodyLarge4002Lines,
  textHeadingSmall,
} from "@databiosphere/findable-ui/lib/styles/common/mixins/fonts";
import { ThemeProps } from "@databiosphere/findable-ui/lib/theme/theme";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  headerHeight: number;
}

const footnotes = (props: ThemeProps) => css`
  section[data-footnotes] {
    border-top: 1px solid ${smokeMain(props)};
    margin-top: 24px;
    padding-top: 16px;

    h2[id="footnotes"] {
      display: none;
    }
  }
`;

const iframe = css`
  iframe {
    aspect-ratio: 16/ 9;
    border: none;
    display: block;
    margin: 32px 0;
    width: 100%;
  }
`;

const image = (props: ThemeProps) => css`
  li,
  > p {
    img {
      border: 1px solid ${smokeMain(props)};
      border-radius: 6px;
      margin: 16px 0;
      max-width: 100%;
    }
  }
`;

const muiAlert = (props: ThemeProps) => css`
  .MuiAlert-root {
    margin: 24px 0;

    &.MuiAlert-standardWarning {
      margin: 16px 0;
    }

    &:last-child {
      margin-bottom: 0;
    }

    .MuiAlert-message {
      ${textBodyLarge4002Lines(props)};

      ol > li,
      ul > li {
        margin: 8px 0;

        &:first-of-type {
          margin-top: 0;
        }

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }

    .MuiAlert-message:first-of-type {
      gap: 16px;

      .MuiAlertTitle-root {
        ${textHeadingSmall(props)};
      }
    }
  }
`;

const muiButtonContainedPrimary = css`
  .MuiButton-containedPrimary {
    display: flex;
    margin: 16px 0;
    width: fit-content;
  }
`;

export const Content = styled.div<Props>`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    &:hover {
      a {
        opacity: 1;
      }
    }
  }

  h1 {
    scroll-margin-top: ${({ headerHeight }) => headerHeight + 24}px;
  }

  h2,
  h3 {
    scroll-margin-top: ${({ headerHeight }) => headerHeight + 32}px;
  }

  h4 {
    scroll-margin-top: ${({ headerHeight }) => headerHeight + 24}px;
  }

  sup a {
    scroll-margin-top: ${({ headerHeight }) => headerHeight + 48}px;
  }

  h1 + ol,
  h1 + p,
  h1 + ul {
    margin-top: 16px;
  }

  ol + p,
  pre + p,
  ul + p {
    margin-top: 16px;
  }

  ol ol {
    list-style-type: lower-roman;
  }

  p {
    overflow-wrap: break-word;
  }

  ${footnotes};
  ${iframe};
  ${image};
  ${muiAlert};
  ${muiButtonContainedPrimary};
`;
