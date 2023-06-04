// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: poSKmt1KMDoYUF6h3Y78GP
// Component: iDHH7o37f0

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: wS2ddgETNt58W/component
import Button from "../../Button"; // plasmic-import: kC2F6N1O7TYTuM/component
import MenuButton from "../../MenuButton"; // plasmic-import: 3IYrK-BAkdyFM-/component

import { useScreenVariants as useScreenVariantsgW35LCmK5FyoDz } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: gW35LCmK5FYODz/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_paradosiaki_agiografia.module.css"; // plasmic-import: poSKmt1KMDoYUF6h3Y78GP/projectcss
import sty from "./PlasmicNewPage.module.css"; // plasmic-import: iDHH7o37f0/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: CXbqs2YSSg-hSz/icon
import ButtonArrowIcon from "./icons/PlasmicIcon__ButtonArrow"; // plasmic-import: PBYxdjRw4Gq0L2/icon
import panospngPkImJjd9Q from "./images/panospng.png"; // plasmic-import: PKImJjd9q/picture
import hhhhhpngM99EeaMm7 from "./images/hhhhhpng.png"; // plasmic-import: m99EeaMM7/picture

export type PlasmicNewPage__VariantMembers = {};
export type PlasmicNewPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewPage__VariantsArgs;
export const PlasmicNewPage__VariantProps = new Array<VariantPropType>();

export type PlasmicNewPage__ArgsType = {};
type ArgPropType = keyof PlasmicNewPage__ArgsType;
export const PlasmicNewPage__ArgProps = new Array<ArgPropType>();

export type PlasmicNewPage__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  button?: p.Flex<typeof Button>;
  text?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  menuButton?: p.Flex<typeof MenuButton>;
  h6?: p.Flex<"h6">;
  link?: p.Flex<"a">;
};

export interface DefaultNewPageProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicNewPage__RenderFunc(props: {
  variants: PlasmicNewPage__VariantsArgs;
  args: PlasmicNewPage__ArgsType;
  overrides: PlasmicNewPage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsgW35LCmK5FyoDz()
  });

  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_library_plasmic_color_type_css.plasmic_tokens,
            sty.root
          )}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__oxBmC)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__jiWoP)}>
              <Header
                data-plasmic-name={"header"}
                data-plasmic-override={overrides.header}
                className={classNames("__wab_instance", sty.header)}
              />
            </div>
          </p.Stack>
          <div className={classNames(projectcss.all, sty.freeBox__ufkOm)}>
            <h1
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1__xeyZs
              )}
            >
              {"Σχετικά Με Εμάς"}
            </h1>
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__xTmao)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"210px" as const}
              loading={"lazy" as const}
              src={{
                src: panospngPkImJjd9Q,
                fullWidth: 297,
                fullHeight: 268,
                aspectRatio: undefined
              }}
            />

            <h1
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1___3Vz1E
              )}
            >
              {
                "Γεια σας είμαι ο Παναγιώτης και ασχολούμαι ερασιτεχνικά με την αγιογραφία. Αγαπώ ιδιαίτερα αυτό που κάνω γιατί η ενασχόληση του με οδηγεί στον μυστηριακό κόσμο των εικόνων. Λατρεύω την συμβολική γλώσσα τους καθώς και την ηρεμία που μου χαρίζει αυτή μου η ενασχόληση. Εάν θέλετε μπορείτε να επικοινωνήσετε μαζί μου στο panos@paradosiaki-agiografia.gr"
              }
            </h1>
            <Button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              className={classNames("__wab_instance", sty.button)}
              link={`/`}
              submitsForm={true}
            >
              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text
                )}
              >
                {"Eπιστροφή Στην Αρχική"}
              </div>
              <ButtonArrowIcon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />
            </Button>
          </div>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__xpKhO)}
          >
            {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
              <MenuButton
                data-plasmic-name={"menuButton"}
                data-plasmic-override={overrides.menuButton}
                className={classNames("__wab_instance", sty.menuButton)}
              />
            ) : null}
            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__sjRgx)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__rsynz)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"112px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: hhhhhpngM99EeaMm7,
                    fullWidth: 580,
                    fullHeight: 580,
                    aspectRatio: undefined
                  }}
                />
              </p.Stack>
            ) : null}
            <h6
              data-plasmic-name={"h6"}
              data-plasmic-override={overrides.h6}
              className={classNames(
                projectcss.all,
                projectcss.h6,
                projectcss.__wab_text,
                sty.h6
              )}
            >
              {
                "Copyright © 2023 Paradosiaki-Agiografia.gr. All rights reserved."
              }
            </h6>
            <a
              data-plasmic-name={"link"}
              data-plasmic-override={overrides.link}
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link
              )}
              href={`/new-page`}
              target={"_blank" as const}
            >
              {hasVariant(globalVariants, "screen", "mobile")
                ? "Σχετικα με Εμας"
                : "Σχετικα με Εμας"}
            </a>
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "button", "text", "svg", "menuButton", "h6", "link"],
  header: ["header"],
  button: ["button", "text", "svg"],
  text: ["text"],
  svg: ["svg"],
  menuButton: ["menuButton"],
  h6: ["h6"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  button: typeof Button;
  text: "div";
  svg: "svg";
  menuButton: typeof MenuButton;
  h6: "h6";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewPage__VariantsArgs;
    args?: PlasmicNewPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNewPage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNewPage__ArgProps,
          internalVariantPropNames: PlasmicNewPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNewPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewPage";
  } else {
    func.displayName = `PlasmicNewPage.${nodeName}`;
  }
  return func;
}

export const PlasmicNewPage = Object.assign(
  // Top-level PlasmicNewPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),
    svg: makeNodeComponent("svg"),
    menuButton: makeNodeComponent("menuButton"),
    h6: makeNodeComponent("h6"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicNewPage
    internalVariantProps: PlasmicNewPage__VariantProps,
    internalArgProps: PlasmicNewPage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNewPage;
/* prettier-ignore-end */
