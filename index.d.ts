export interface IProjects {
  header: string;
  title: string;
  link: string;
  linkGithub?: string;
  imgSrc: string;
}


// export interface IProgram {
//   AntenaId: number;
//   ArticleLink: string;
//   Category: null | string;
//   Description: null | string;
//   Id: number;
//   IsActive: boolean;
//   Leaders: any;
//   Photo: string;
//   Sounds: Array<any>;
//   StartHour: { _seconds: number; _nanoseconds: number };
//   StopHour: { _seconds: number; _nanoseconds: number };
//   Subprograms: any;
//   Title: string;
// }

// export interface ITheme {
//   key: string;
//   Color: {
//     primary: string;
//     secondary: string;
//     tertiary: string;
//     tertiaryTransparent: string;
//     notHighlightedText: string;
//     highlightedText: string;
//     miniplayer: {
//       background: string;
//       border: string;
//     };
//     icon: {
//       highlighted: string;
//       notHighlighted: string;
//     };
//     heart: string;
//     arrow: {
//       expanded: string;
//       notExpanded: string;
//     };
//     bell: {
//       highlighted: string;
//       notHighlighted: string;
//     };
//     button: { primary: string; secondary: string };
//   };
//   Background: {
//     primary: string;
//     secondary: string;
//     tertiary: string;
//     highlighted: string;
//     userHighlighted: string;
//     contrasting: string;
//   };
//   Size: {
//     large: number;
//     big: number;
//     medium: number;
//     main: number;
//     small: number;
//   };
//   TabBar: {
//     activeTintColor: string;
//     labelStyle: { fontSize: number };
//     style: { backgroundColor: string };
//     tabStyle: {
//       width: string;
//     };
//     indicatorStyle: {
//       height: number;
//       backgroundColor: string;
//     };
//     scrollEnabled: boolean;
//     lazy: boolean;
//   };
//   Header: {
//     cardStyle: string;
//     headerStyle: {
//       backgroundColor: string;
//     };
//     headerTintColor: string;
//     headerTitleAlign: string;
//   };
//   NoFavImage: NodeRequire;
//   ShadowImage: {
//     primary: NodeRequire;
//   };
//   PRSALogo: NodeRequire;
//   AntenaLogo: {
//     1: NodeRequire;
//     2: NodeRequire;
//     3: NodeRequire;
//     4: NodeRequire;
//     10: NodeRequire;
//     9: NodeRequire;
//     7: NodeRequire;
//     5: NodeRequire;
//     11: NodeRequire;
//     6: NodeRequire;
//   };
// }