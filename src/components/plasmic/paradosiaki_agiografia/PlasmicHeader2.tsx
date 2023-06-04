// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: poSKmt1KMDoYUF6h3Y78GP
// Component: hz3fKOWkD_JODa

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
import MenuButton from "../../MenuButton"; // plasmic-import: 3IYrK-BAkdyFM-/component
import IconLink from "../../IconLink"; // plasmic-import: zYgNRGyV2nOzdl/component

import { useScreenVariants as useScreenVariantsgW35LCmK5FyoDz } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: gW35LCmK5FYODz/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_paradosiaki_agiografia.module.css"; // plasmic-import: poSKmt1KMDoYUF6h3Y78GP/projectcss
import sty from "./PlasmicHeader2.module.css"; // plasmic-import: hz3fKOWkD_JODa/css

import Logo4SvgIcon from "./icons/PlasmicIcon__Logo4Svg"; // plasmic-import: gvgoFtwQguIARd/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 0meV-jpaRXVkA-/icon

export type PlasmicHeader2__VariantMembers = {};
export type PlasmicHeader2__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeader2__VariantsArgs;
export const PlasmicHeader2__VariantProps = new Array<VariantPropType>();

export type PlasmicHeader2__ArgsType = {};
type ArgPropType = keyof PlasmicHeader2__ArgsType;
export const PlasmicHeader2__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader2__OverridesType = {
  root?: p.Flex<"div">;
  menuButton?: p.Flex<typeof MenuButton>;
  iconLink?: p.Flex<typeof IconLink>;
  text?: p.Flex<"div">;
};

export interface DefaultHeader2Props {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHeader2__RenderFunc(props: {
  variants: PlasmicHeader2__VariantsArgs;
  args: PlasmicHeader2__ArgsType;
  overrides: PlasmicHeader2__OverridesType;
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
    true ? (
      <p.Stack
        as={"div"}
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        hasGap={true}
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
        {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
          <MenuButton
            data-plasmic-name={"menuButton"}
            data-plasmic-override={overrides.menuButton}
            className={classNames("__wab_instance", sty.menuButton)}
          />
        ) : null}
        {true ? (
          <a
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__kY0Yz
            )}
            href={`/`}
          >
            <Logo4SvgIcon
              className={classNames(projectcss.all, sty.svg__pIln9)}
              role={"img"}
            />
          </a>
        ) : null}
        {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__dmQH)}
          >
            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__nvpT9
              )}
              href={`/store`}
            >
              {"Store"}
            </a>
            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__acvEr
              )}
              href={`/about`}
            >
              {"About"}
            </a>
            <a
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__kzJon
              )}
              href={`/faq`}
            >
              {hasVariant(globalVariants, "screen", "mobile") ? "Faq" : "Faq"}
            </a>
          </p.Stack>
        ) : null}
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___6CVlZ)}
        >
          <IconLink
            data-plasmic-name={"iconLink"}
            data-plasmic-override={overrides.iconLink}
            className={classNames("__wab_instance", sty.iconLink)}
            icon={
              <React.Fragment>
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__n9Uth)}
                  role={"img"}
                />

                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  {"0"}
                </div>
              </React.Fragment>
            }
          />
        </p.Stack>
      </p.Stack>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "menuButton", "iconLink", "text"],
  menuButton: ["menuButton"],
  iconLink: ["iconLink", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  menuButton: typeof MenuButton;
  iconLink: typeof IconLink;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader2__VariantsArgs;
    args?: PlasmicHeader2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHeader2__ArgsType,
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
          internalArgPropNames: PlasmicHeader2__ArgProps,
          internalVariantPropNames: PlasmicHeader2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHeader2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader2";
  } else {
    func.displayName = `PlasmicHeader2.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader2 = Object.assign(
  // Top-level PlasmicHeader2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    menuButton: makeNodeComponent("menuButton"),
    iconLink: makeNodeComponent("iconLink"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicHeader2
    internalVariantProps: PlasmicHeader2__VariantProps,
    internalArgProps: PlasmicHeader2__ArgProps
  }
);

export default PlasmicHeader2;
/* prettier-ignore-end */