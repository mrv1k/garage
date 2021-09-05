export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AvifOptions = {
  quality: Maybe<Scalars["Int"]>;
  lossless: Maybe<Scalars["Boolean"]>;
  speed: Maybe<Scalars["Int"]>;
};

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width: Maybe<Scalars["Int"]>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq: Maybe<Scalars["Boolean"]>;
  ne: Maybe<Scalars["Boolean"]>;
  in: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
  nin: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
};

export type DateQueryOperatorInput = {
  eq: Maybe<Scalars["Date"]>;
  ne: Maybe<Scalars["Date"]>;
  gt: Maybe<Scalars["Date"]>;
  gte: Maybe<Scalars["Date"]>;
  lt: Maybe<Scalars["Date"]>;
  lte: Maybe<Scalars["Date"]>;
  in: Maybe<Array<Maybe<Scalars["Date"]>>>;
  nin: Maybe<Array<Maybe<Scalars["Date"]>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars["String"];
  absolutePath: Scalars["String"];
  relativePath: Scalars["String"];
  extension: Scalars["String"];
  size: Scalars["Int"];
  prettySize: Scalars["String"];
  modifiedTime: Scalars["Date"];
  accessTime: Scalars["Date"];
  changeTime: Scalars["Date"];
  birthTime: Scalars["Date"];
  root: Scalars["String"];
  dir: Scalars["String"];
  base: Scalars["String"];
  ext: Scalars["String"];
  name: Scalars["String"];
  relativeDirectory: Scalars["String"];
  dev: Scalars["Int"];
  mode: Scalars["Int"];
  nlink: Scalars["Int"];
  uid: Scalars["Int"];
  gid: Scalars["Int"];
  rdev: Scalars["Int"];
  ino: Scalars["Float"];
  atimeMs: Scalars["Float"];
  mtimeMs: Scalars["Float"];
  ctimeMs: Scalars["Float"];
  atime: Scalars["Date"];
  mtime: Scalars["Date"];
  ctime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars["Float"]>;
  blksize: Maybe<Scalars["Int"]>;
  blocks: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DirectoryModifiedTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryAccessTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryChangeTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryBirthTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryAtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryMtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryCtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryConnection = {
  totalCount: Scalars["Int"];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  sum: Maybe<Scalars["Float"]>;
  group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next: Maybe<Directory>;
  node: Directory;
  previous: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | "sourceInstanceName"
  | "absolutePath"
  | "relativePath"
  | "extension"
  | "size"
  | "prettySize"
  | "modifiedTime"
  | "accessTime"
  | "changeTime"
  | "birthTime"
  | "root"
  | "dir"
  | "base"
  | "ext"
  | "name"
  | "relativeDirectory"
  | "dev"
  | "mode"
  | "nlink"
  | "uid"
  | "gid"
  | "rdev"
  | "ino"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime"
  | "birthtimeMs"
  | "blksize"
  | "blocks"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type";

export type DirectoryFilterInput = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type DirectorySortInput = {
  fields: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars["String"];
  shadow: Scalars["String"];
  opacity: Maybe<Scalars["Int"]>;
};

export type Fields = {
  slug: Scalars["String"];
};

export type FieldsFilterInput = {
  slug: Maybe<StringQueryOperatorInput>;
};

export type File = Node & {
  sourceInstanceName: Scalars["String"];
  absolutePath: Scalars["String"];
  relativePath: Scalars["String"];
  extension: Scalars["String"];
  size: Scalars["Int"];
  prettySize: Scalars["String"];
  modifiedTime: Scalars["Date"];
  accessTime: Scalars["Date"];
  changeTime: Scalars["Date"];
  birthTime: Scalars["Date"];
  root: Scalars["String"];
  dir: Scalars["String"];
  base: Scalars["String"];
  ext: Scalars["String"];
  name: Scalars["String"];
  relativeDirectory: Scalars["String"];
  dev: Scalars["Int"];
  mode: Scalars["Int"];
  nlink: Scalars["Int"];
  uid: Scalars["Int"];
  gid: Scalars["Int"];
  rdev: Scalars["Int"];
  ino: Scalars["Float"];
  atimeMs: Scalars["Float"];
  mtimeMs: Scalars["Float"];
  ctimeMs: Scalars["Float"];
  atime: Scalars["Date"];
  mtime: Scalars["Date"];
  ctime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars["Float"]>;
  blksize: Maybe<Scalars["Int"]>;
  blocks: Maybe<Scalars["Int"]>;
  /** Copy file to static directory and return public url to it */
  publicURL: Maybe<Scalars["String"]>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark: Maybe<MarkdownRemark>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp: Maybe<ImageSharp>;
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type FileModifiedTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileAccessTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileChangeTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileBirthTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileAtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileMtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileCtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileConnection = {
  totalCount: Scalars["Int"];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  sum: Maybe<Scalars["Float"]>;
  group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next: Maybe<File>;
  node: File;
  previous: Maybe<File>;
};

export type FileFieldsEnum =
  | "sourceInstanceName"
  | "absolutePath"
  | "relativePath"
  | "extension"
  | "size"
  | "prettySize"
  | "modifiedTime"
  | "accessTime"
  | "changeTime"
  | "birthTime"
  | "root"
  | "dir"
  | "base"
  | "ext"
  | "name"
  | "relativeDirectory"
  | "dev"
  | "mode"
  | "nlink"
  | "uid"
  | "gid"
  | "rdev"
  | "ino"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime"
  | "birthtimeMs"
  | "blksize"
  | "blocks"
  | "publicURL"
  | "childrenMarkdownRemark"
  | "childrenMarkdownRemark___id"
  | "childrenMarkdownRemark___frontmatter___title"
  | "childrenMarkdownRemark___frontmatter___date"
  | "childrenMarkdownRemark___frontmatter___slug"
  | "childrenMarkdownRemark___frontmatter___spoiler"
  | "childrenMarkdownRemark___fields___slug"
  | "childrenMarkdownRemark___excerpt"
  | "childrenMarkdownRemark___rawMarkdownBody"
  | "childrenMarkdownRemark___fileAbsolutePath"
  | "childrenMarkdownRemark___html"
  | "childrenMarkdownRemark___htmlAst"
  | "childrenMarkdownRemark___excerptAst"
  | "childrenMarkdownRemark___headings"
  | "childrenMarkdownRemark___headings___id"
  | "childrenMarkdownRemark___headings___value"
  | "childrenMarkdownRemark___headings___depth"
  | "childrenMarkdownRemark___timeToRead"
  | "childrenMarkdownRemark___tableOfContents"
  | "childrenMarkdownRemark___wordCount___paragraphs"
  | "childrenMarkdownRemark___wordCount___sentences"
  | "childrenMarkdownRemark___wordCount___words"
  | "childrenMarkdownRemark___parent___id"
  | "childrenMarkdownRemark___parent___parent___id"
  | "childrenMarkdownRemark___parent___parent___children"
  | "childrenMarkdownRemark___parent___children"
  | "childrenMarkdownRemark___parent___children___id"
  | "childrenMarkdownRemark___parent___children___children"
  | "childrenMarkdownRemark___parent___internal___content"
  | "childrenMarkdownRemark___parent___internal___contentDigest"
  | "childrenMarkdownRemark___parent___internal___description"
  | "childrenMarkdownRemark___parent___internal___fieldOwners"
  | "childrenMarkdownRemark___parent___internal___ignoreType"
  | "childrenMarkdownRemark___parent___internal___mediaType"
  | "childrenMarkdownRemark___parent___internal___owner"
  | "childrenMarkdownRemark___parent___internal___type"
  | "childrenMarkdownRemark___children"
  | "childrenMarkdownRemark___children___id"
  | "childrenMarkdownRemark___children___parent___id"
  | "childrenMarkdownRemark___children___parent___children"
  | "childrenMarkdownRemark___children___children"
  | "childrenMarkdownRemark___children___children___id"
  | "childrenMarkdownRemark___children___children___children"
  | "childrenMarkdownRemark___children___internal___content"
  | "childrenMarkdownRemark___children___internal___contentDigest"
  | "childrenMarkdownRemark___children___internal___description"
  | "childrenMarkdownRemark___children___internal___fieldOwners"
  | "childrenMarkdownRemark___children___internal___ignoreType"
  | "childrenMarkdownRemark___children___internal___mediaType"
  | "childrenMarkdownRemark___children___internal___owner"
  | "childrenMarkdownRemark___children___internal___type"
  | "childrenMarkdownRemark___internal___content"
  | "childrenMarkdownRemark___internal___contentDigest"
  | "childrenMarkdownRemark___internal___description"
  | "childrenMarkdownRemark___internal___fieldOwners"
  | "childrenMarkdownRemark___internal___ignoreType"
  | "childrenMarkdownRemark___internal___mediaType"
  | "childrenMarkdownRemark___internal___owner"
  | "childrenMarkdownRemark___internal___type"
  | "childMarkdownRemark___id"
  | "childMarkdownRemark___frontmatter___title"
  | "childMarkdownRemark___frontmatter___date"
  | "childMarkdownRemark___frontmatter___slug"
  | "childMarkdownRemark___frontmatter___spoiler"
  | "childMarkdownRemark___fields___slug"
  | "childMarkdownRemark___excerpt"
  | "childMarkdownRemark___rawMarkdownBody"
  | "childMarkdownRemark___fileAbsolutePath"
  | "childMarkdownRemark___html"
  | "childMarkdownRemark___htmlAst"
  | "childMarkdownRemark___excerptAst"
  | "childMarkdownRemark___headings"
  | "childMarkdownRemark___headings___id"
  | "childMarkdownRemark___headings___value"
  | "childMarkdownRemark___headings___depth"
  | "childMarkdownRemark___timeToRead"
  | "childMarkdownRemark___tableOfContents"
  | "childMarkdownRemark___wordCount___paragraphs"
  | "childMarkdownRemark___wordCount___sentences"
  | "childMarkdownRemark___wordCount___words"
  | "childMarkdownRemark___parent___id"
  | "childMarkdownRemark___parent___parent___id"
  | "childMarkdownRemark___parent___parent___children"
  | "childMarkdownRemark___parent___children"
  | "childMarkdownRemark___parent___children___id"
  | "childMarkdownRemark___parent___children___children"
  | "childMarkdownRemark___parent___internal___content"
  | "childMarkdownRemark___parent___internal___contentDigest"
  | "childMarkdownRemark___parent___internal___description"
  | "childMarkdownRemark___parent___internal___fieldOwners"
  | "childMarkdownRemark___parent___internal___ignoreType"
  | "childMarkdownRemark___parent___internal___mediaType"
  | "childMarkdownRemark___parent___internal___owner"
  | "childMarkdownRemark___parent___internal___type"
  | "childMarkdownRemark___children"
  | "childMarkdownRemark___children___id"
  | "childMarkdownRemark___children___parent___id"
  | "childMarkdownRemark___children___parent___children"
  | "childMarkdownRemark___children___children"
  | "childMarkdownRemark___children___children___id"
  | "childMarkdownRemark___children___children___children"
  | "childMarkdownRemark___children___internal___content"
  | "childMarkdownRemark___children___internal___contentDigest"
  | "childMarkdownRemark___children___internal___description"
  | "childMarkdownRemark___children___internal___fieldOwners"
  | "childMarkdownRemark___children___internal___ignoreType"
  | "childMarkdownRemark___children___internal___mediaType"
  | "childMarkdownRemark___children___internal___owner"
  | "childMarkdownRemark___children___internal___type"
  | "childMarkdownRemark___internal___content"
  | "childMarkdownRemark___internal___contentDigest"
  | "childMarkdownRemark___internal___description"
  | "childMarkdownRemark___internal___fieldOwners"
  | "childMarkdownRemark___internal___ignoreType"
  | "childMarkdownRemark___internal___mediaType"
  | "childMarkdownRemark___internal___owner"
  | "childMarkdownRemark___internal___type"
  | "childrenImageSharp"
  | "childrenImageSharp___fixed___base64"
  | "childrenImageSharp___fixed___tracedSVG"
  | "childrenImageSharp___fixed___aspectRatio"
  | "childrenImageSharp___fixed___width"
  | "childrenImageSharp___fixed___height"
  | "childrenImageSharp___fixed___src"
  | "childrenImageSharp___fixed___srcSet"
  | "childrenImageSharp___fixed___srcWebp"
  | "childrenImageSharp___fixed___srcSetWebp"
  | "childrenImageSharp___fixed___originalName"
  | "childrenImageSharp___fluid___base64"
  | "childrenImageSharp___fluid___tracedSVG"
  | "childrenImageSharp___fluid___aspectRatio"
  | "childrenImageSharp___fluid___src"
  | "childrenImageSharp___fluid___srcSet"
  | "childrenImageSharp___fluid___srcWebp"
  | "childrenImageSharp___fluid___srcSetWebp"
  | "childrenImageSharp___fluid___sizes"
  | "childrenImageSharp___fluid___originalImg"
  | "childrenImageSharp___fluid___originalName"
  | "childrenImageSharp___fluid___presentationWidth"
  | "childrenImageSharp___fluid___presentationHeight"
  | "childrenImageSharp___gatsbyImageData"
  | "childrenImageSharp___original___width"
  | "childrenImageSharp___original___height"
  | "childrenImageSharp___original___src"
  | "childrenImageSharp___resize___src"
  | "childrenImageSharp___resize___tracedSVG"
  | "childrenImageSharp___resize___width"
  | "childrenImageSharp___resize___height"
  | "childrenImageSharp___resize___aspectRatio"
  | "childrenImageSharp___resize___originalName"
  | "childrenImageSharp___id"
  | "childrenImageSharp___parent___id"
  | "childrenImageSharp___parent___parent___id"
  | "childrenImageSharp___parent___parent___children"
  | "childrenImageSharp___parent___children"
  | "childrenImageSharp___parent___children___id"
  | "childrenImageSharp___parent___children___children"
  | "childrenImageSharp___parent___internal___content"
  | "childrenImageSharp___parent___internal___contentDigest"
  | "childrenImageSharp___parent___internal___description"
  | "childrenImageSharp___parent___internal___fieldOwners"
  | "childrenImageSharp___parent___internal___ignoreType"
  | "childrenImageSharp___parent___internal___mediaType"
  | "childrenImageSharp___parent___internal___owner"
  | "childrenImageSharp___parent___internal___type"
  | "childrenImageSharp___children"
  | "childrenImageSharp___children___id"
  | "childrenImageSharp___children___parent___id"
  | "childrenImageSharp___children___parent___children"
  | "childrenImageSharp___children___children"
  | "childrenImageSharp___children___children___id"
  | "childrenImageSharp___children___children___children"
  | "childrenImageSharp___children___internal___content"
  | "childrenImageSharp___children___internal___contentDigest"
  | "childrenImageSharp___children___internal___description"
  | "childrenImageSharp___children___internal___fieldOwners"
  | "childrenImageSharp___children___internal___ignoreType"
  | "childrenImageSharp___children___internal___mediaType"
  | "childrenImageSharp___children___internal___owner"
  | "childrenImageSharp___children___internal___type"
  | "childrenImageSharp___internal___content"
  | "childrenImageSharp___internal___contentDigest"
  | "childrenImageSharp___internal___description"
  | "childrenImageSharp___internal___fieldOwners"
  | "childrenImageSharp___internal___ignoreType"
  | "childrenImageSharp___internal___mediaType"
  | "childrenImageSharp___internal___owner"
  | "childrenImageSharp___internal___type"
  | "childImageSharp___fixed___base64"
  | "childImageSharp___fixed___tracedSVG"
  | "childImageSharp___fixed___aspectRatio"
  | "childImageSharp___fixed___width"
  | "childImageSharp___fixed___height"
  | "childImageSharp___fixed___src"
  | "childImageSharp___fixed___srcSet"
  | "childImageSharp___fixed___srcWebp"
  | "childImageSharp___fixed___srcSetWebp"
  | "childImageSharp___fixed___originalName"
  | "childImageSharp___fluid___base64"
  | "childImageSharp___fluid___tracedSVG"
  | "childImageSharp___fluid___aspectRatio"
  | "childImageSharp___fluid___src"
  | "childImageSharp___fluid___srcSet"
  | "childImageSharp___fluid___srcWebp"
  | "childImageSharp___fluid___srcSetWebp"
  | "childImageSharp___fluid___sizes"
  | "childImageSharp___fluid___originalImg"
  | "childImageSharp___fluid___originalName"
  | "childImageSharp___fluid___presentationWidth"
  | "childImageSharp___fluid___presentationHeight"
  | "childImageSharp___gatsbyImageData"
  | "childImageSharp___original___width"
  | "childImageSharp___original___height"
  | "childImageSharp___original___src"
  | "childImageSharp___resize___src"
  | "childImageSharp___resize___tracedSVG"
  | "childImageSharp___resize___width"
  | "childImageSharp___resize___height"
  | "childImageSharp___resize___aspectRatio"
  | "childImageSharp___resize___originalName"
  | "childImageSharp___id"
  | "childImageSharp___parent___id"
  | "childImageSharp___parent___parent___id"
  | "childImageSharp___parent___parent___children"
  | "childImageSharp___parent___children"
  | "childImageSharp___parent___children___id"
  | "childImageSharp___parent___children___children"
  | "childImageSharp___parent___internal___content"
  | "childImageSharp___parent___internal___contentDigest"
  | "childImageSharp___parent___internal___description"
  | "childImageSharp___parent___internal___fieldOwners"
  | "childImageSharp___parent___internal___ignoreType"
  | "childImageSharp___parent___internal___mediaType"
  | "childImageSharp___parent___internal___owner"
  | "childImageSharp___parent___internal___type"
  | "childImageSharp___children"
  | "childImageSharp___children___id"
  | "childImageSharp___children___parent___id"
  | "childImageSharp___children___parent___children"
  | "childImageSharp___children___children"
  | "childImageSharp___children___children___id"
  | "childImageSharp___children___children___children"
  | "childImageSharp___children___internal___content"
  | "childImageSharp___children___internal___contentDigest"
  | "childImageSharp___children___internal___description"
  | "childImageSharp___children___internal___fieldOwners"
  | "childImageSharp___children___internal___ignoreType"
  | "childImageSharp___children___internal___mediaType"
  | "childImageSharp___children___internal___owner"
  | "childImageSharp___children___internal___type"
  | "childImageSharp___internal___content"
  | "childImageSharp___internal___contentDigest"
  | "childImageSharp___internal___description"
  | "childImageSharp___internal___fieldOwners"
  | "childImageSharp___internal___ignoreType"
  | "childImageSharp___internal___mediaType"
  | "childImageSharp___internal___owner"
  | "childImageSharp___internal___type"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type";

export type FileFilterInput = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type FileSortInput = {
  fields: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq: Maybe<Scalars["Float"]>;
  ne: Maybe<Scalars["Float"]>;
  gt: Maybe<Scalars["Float"]>;
  gte: Maybe<Scalars["Float"]>;
  lt: Maybe<Scalars["Float"]>;
  lte: Maybe<Scalars["Float"]>;
  in: Maybe<Array<Maybe<Scalars["Float"]>>>;
  nin: Maybe<Array<Maybe<Scalars["Float"]>>>;
};

export type Frontmatter = {
  title: Maybe<Scalars["String"]>;
  date: Maybe<Scalars["Date"]>;
  slug: Maybe<Scalars["String"]>;
  spoiler: Maybe<Scalars["String"]>;
};

export type FrontmatterDateArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FrontmatterFilterInput = {
  title: Maybe<StringQueryOperatorInput>;
  date: Maybe<DateQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  spoiler: Maybe<StringQueryOperatorInput>;
};

export type ImageCropFocus =
  | "CENTER"
  | "NORTH"
  | "NORTHEAST"
  | "EAST"
  | "SOUTHEAST"
  | "SOUTH"
  | "SOUTHWEST"
  | "WEST"
  | "NORTHWEST"
  | "ENTROPY"
  | "ATTENTION";

export type ImageFit = "COVER" | "CONTAIN" | "FILL" | "INSIDE" | "OUTSIDE";

export type ImageFormat =
  | "NO_CHANGE"
  | "AUTO"
  | "JPG"
  | "PNG"
  | "WEBP"
  | "AVIF";

export type ImageLayout = "FIXED" | "FULL_WIDTH" | "CONSTRAINED";

export type ImagePlaceholder =
  | "DOMINANT_COLOR"
  | "TRACED_SVG"
  | "BLURRED"
  | "NONE";

export type ImageSharp = Node & {
  fixed: Maybe<ImageSharpFixed>;
  fluid: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars["JSON"];
  original: Maybe<ImageSharpOriginal>;
  resize: Maybe<ImageSharpResize>;
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ImageSharpFixedArgs = {
  width: Maybe<Scalars["Int"]>;
  height: Maybe<Scalars["Int"]>;
  base64Width: Maybe<Scalars["Int"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars["Int"]>;
  jpegQuality: Maybe<Scalars["Int"]>;
  pngQuality: Maybe<Scalars["Int"]>;
  webpQuality: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
};

export type ImageSharpFluidArgs = {
  maxWidth: Maybe<Scalars["Int"]>;
  maxHeight: Maybe<Scalars["Int"]>;
  base64Width: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars["Int"]>;
  jpegQuality: Maybe<Scalars["Int"]>;
  pngQuality: Maybe<Scalars["Int"]>;
  webpQuality: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
  sizes?: Maybe<Scalars["String"]>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars["Int"]>;
  height: Maybe<Scalars["Int"]>;
  aspectRatio: Maybe<Scalars["Float"]>;
  placeholder: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<Array<Maybe<Scalars["Float"]>>>;
  breakpoints: Maybe<Array<Maybe<Scalars["Int"]>>>;
  sizes: Maybe<Scalars["String"]>;
  quality: Maybe<Scalars["Int"]>;
  jpgOptions: Maybe<JpgOptions>;
  pngOptions: Maybe<PngOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AvifOptions>;
  transformOptions: Maybe<TransformOptions>;
  backgroundColor: Maybe<Scalars["String"]>;
};

export type ImageSharpResizeArgs = {
  width: Maybe<Scalars["Int"]>;
  height: Maybe<Scalars["Int"]>;
  quality: Maybe<Scalars["Int"]>;
  jpegQuality: Maybe<Scalars["Int"]>;
  pngQuality: Maybe<Scalars["Int"]>;
  webpQuality: Maybe<Scalars["Int"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionLevel?: Maybe<Scalars["Int"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars["Boolean"]>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
};

export type ImageSharpConnection = {
  totalCount: Scalars["Int"];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  sum: Maybe<Scalars["Float"]>;
  group: Array<ImageSharpGroupConnection>;
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next: Maybe<ImageSharp>;
  node: ImageSharp;
  previous: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | "fixed___base64"
  | "fixed___tracedSVG"
  | "fixed___aspectRatio"
  | "fixed___width"
  | "fixed___height"
  | "fixed___src"
  | "fixed___srcSet"
  | "fixed___srcWebp"
  | "fixed___srcSetWebp"
  | "fixed___originalName"
  | "fluid___base64"
  | "fluid___tracedSVG"
  | "fluid___aspectRatio"
  | "fluid___src"
  | "fluid___srcSet"
  | "fluid___srcWebp"
  | "fluid___srcSetWebp"
  | "fluid___sizes"
  | "fluid___originalImg"
  | "fluid___originalName"
  | "fluid___presentationWidth"
  | "fluid___presentationHeight"
  | "gatsbyImageData"
  | "original___width"
  | "original___height"
  | "original___src"
  | "resize___src"
  | "resize___tracedSVG"
  | "resize___width"
  | "resize___height"
  | "resize___aspectRatio"
  | "resize___originalName"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type";

export type ImageSharpFilterInput = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JsonQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  base64: Maybe<Scalars["String"]>;
  tracedSVG: Maybe<Scalars["String"]>;
  aspectRatio: Maybe<Scalars["Float"]>;
  width: Scalars["Float"];
  height: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp: Maybe<Scalars["String"]>;
  srcSetWebp: Maybe<Scalars["String"]>;
  originalName: Maybe<Scalars["String"]>;
};

export type ImageSharpFixedFilterInput = {
  base64: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  width: Maybe<FloatQueryOperatorInput>;
  height: Maybe<FloatQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  srcSet: Maybe<StringQueryOperatorInput>;
  srcWebp: Maybe<StringQueryOperatorInput>;
  srcSetWebp: Maybe<StringQueryOperatorInput>;
  originalName: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64: Maybe<Scalars["String"]>;
  tracedSVG: Maybe<Scalars["String"]>;
  aspectRatio: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp: Maybe<Scalars["String"]>;
  srcSetWebp: Maybe<Scalars["String"]>;
  sizes: Scalars["String"];
  originalImg: Maybe<Scalars["String"]>;
  originalName: Maybe<Scalars["String"]>;
  presentationWidth: Scalars["Int"];
  presentationHeight: Scalars["Int"];
};

export type ImageSharpFluidFilterInput = {
  base64: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  srcSet: Maybe<StringQueryOperatorInput>;
  srcWebp: Maybe<StringQueryOperatorInput>;
  srcSetWebp: Maybe<StringQueryOperatorInput>;
  sizes: Maybe<StringQueryOperatorInput>;
  originalImg: Maybe<StringQueryOperatorInput>;
  originalName: Maybe<StringQueryOperatorInput>;
  presentationWidth: Maybe<IntQueryOperatorInput>;
  presentationHeight: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type ImageSharpOriginal = {
  width: Maybe<Scalars["Float"]>;
  height: Maybe<Scalars["Float"]>;
  src: Maybe<Scalars["String"]>;
};

export type ImageSharpOriginalFilterInput = {
  width: Maybe<FloatQueryOperatorInput>;
  height: Maybe<FloatQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src: Maybe<Scalars["String"]>;
  tracedSVG: Maybe<Scalars["String"]>;
  width: Maybe<Scalars["Int"]>;
  height: Maybe<Scalars["Int"]>;
  aspectRatio: Maybe<Scalars["Float"]>;
  originalName: Maybe<Scalars["String"]>;
};

export type ImageSharpResizeFilterInput = {
  src: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  width: Maybe<IntQueryOperatorInput>;
  height: Maybe<IntQueryOperatorInput>;
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  originalName: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq: Maybe<Scalars["Int"]>;
  ne: Maybe<Scalars["Int"]>;
  gt: Maybe<Scalars["Int"]>;
  gte: Maybe<Scalars["Int"]>;
  lt: Maybe<Scalars["Int"]>;
  lte: Maybe<Scalars["Int"]>;
  in: Maybe<Array<Maybe<Scalars["Int"]>>>;
  nin: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type Internal = {
  content: Maybe<Scalars["String"]>;
  contentDigest: Scalars["String"];
  description: Maybe<Scalars["String"]>;
  fieldOwners: Maybe<Array<Maybe<Scalars["String"]>>>;
  ignoreType: Maybe<Scalars["Boolean"]>;
  mediaType: Maybe<Scalars["String"]>;
  owner: Scalars["String"];
  type: Scalars["String"];
};

export type InternalFilterInput = {
  content: Maybe<StringQueryOperatorInput>;
  contentDigest: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  fieldOwners: Maybe<StringQueryOperatorInput>;
  ignoreType: Maybe<BooleanQueryOperatorInput>;
  mediaType: Maybe<StringQueryOperatorInput>;
  owner: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  quality: Maybe<Scalars["Int"]>;
  progressive: Maybe<Scalars["Boolean"]>;
};

export type JsonQueryOperatorInput = {
  eq: Maybe<Scalars["JSON"]>;
  ne: Maybe<Scalars["JSON"]>;
  in: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  nin: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  regex: Maybe<Scalars["JSON"]>;
  glob: Maybe<Scalars["JSON"]>;
};

export type MarkdownExcerptFormats = "PLAIN" | "HTML" | "MARKDOWN";

export type MarkdownHeading = {
  id: Maybe<Scalars["String"]>;
  value: Maybe<Scalars["String"]>;
  depth: Maybe<Scalars["Int"]>;
};

export type MarkdownHeadingFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  value: Maybe<StringQueryOperatorInput>;
  depth: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch: Maybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type MarkdownRemark = Node & {
  id: Scalars["ID"];
  frontmatter: Maybe<Frontmatter>;
  fields: Fields;
  excerpt: Maybe<Scalars["String"]>;
  rawMarkdownBody: Maybe<Scalars["String"]>;
  fileAbsolutePath: Maybe<Scalars["String"]>;
  html: Maybe<Scalars["String"]>;
  htmlAst: Maybe<Scalars["JSON"]>;
  excerptAst: Maybe<Scalars["JSON"]>;
  headings: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead: Maybe<Scalars["Int"]>;
  tableOfContents: Maybe<Scalars["String"]>;
  wordCount: Maybe<MarkdownWordCount>;
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars["Int"]>;
  truncate?: Maybe<Scalars["Boolean"]>;
  format?: Maybe<MarkdownExcerptFormats>;
};

export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars["Int"]>;
  truncate?: Maybe<Scalars["Boolean"]>;
};

export type MarkdownRemarkHeadingsArgs = {
  depth: Maybe<MarkdownHeadingLevels>;
};

export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars["Boolean"]>;
  pathToSlugField?: Maybe<Scalars["String"]>;
  maxDepth: Maybe<Scalars["Int"]>;
  heading: Maybe<Scalars["String"]>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars["Int"];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  sum: Maybe<Scalars["Float"]>;
  group: Array<MarkdownRemarkGroupConnection>;
};

export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFieldsEnum =
  | "id"
  | "frontmatter___title"
  | "frontmatter___date"
  | "frontmatter___slug"
  | "frontmatter___spoiler"
  | "fields___slug"
  | "excerpt"
  | "rawMarkdownBody"
  | "fileAbsolutePath"
  | "html"
  | "htmlAst"
  | "excerptAst"
  | "headings"
  | "headings___id"
  | "headings___value"
  | "headings___depth"
  | "timeToRead"
  | "tableOfContents"
  | "wordCount___paragraphs"
  | "wordCount___sentences"
  | "wordCount___words"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type";

export type MarkdownRemarkFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<FrontmatterFilterInput>;
  fields: Maybe<FieldsFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JsonQueryOperatorInput>;
  excerptAst: Maybe<JsonQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFilterListInput = {
  elemMatch: Maybe<MarkdownRemarkFilterInput>;
};

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type MarkdownRemarkSortInput = {
  fields: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  paragraphs: Maybe<Scalars["Int"]>;
  sentences: Maybe<Scalars["Int"]>;
  words: Maybe<Scalars["Int"]>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs: Maybe<IntQueryOperatorInput>;
  sentences: Maybe<IntQueryOperatorInput>;
  words: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch: Maybe<NodeFilterInput>;
};

export type PngOptions = {
  quality: Maybe<Scalars["Int"]>;
  compressionSpeed: Maybe<Scalars["Int"]>;
};

export type PageInfo = {
  currentPage: Scalars["Int"];
  hasPreviousPage: Scalars["Boolean"];
  hasNextPage: Scalars["Boolean"];
  itemCount: Scalars["Int"];
  pageCount: Scalars["Int"];
  perPage: Maybe<Scalars["Int"]>;
  totalCount: Scalars["Int"];
};

export type Potrace = {
  turnPolicy: Maybe<PotraceTurnPolicy>;
  turdSize: Maybe<Scalars["Float"]>;
  alphaMax: Maybe<Scalars["Float"]>;
  optCurve: Maybe<Scalars["Boolean"]>;
  optTolerance: Maybe<Scalars["Float"]>;
  threshold: Maybe<Scalars["Int"]>;
  blackOnWhite: Maybe<Scalars["Boolean"]>;
  color: Maybe<Scalars["String"]>;
  background: Maybe<Scalars["String"]>;
};

export type PotraceTurnPolicy =
  | "TURNPOLICY_BLACK"
  | "TURNPOLICY_WHITE"
  | "TURNPOLICY_LEFT"
  | "TURNPOLICY_RIGHT"
  | "TURNPOLICY_MINORITY"
  | "TURNPOLICY_MAJORITY";

export type Query = {
  file: Maybe<File>;
  allFile: FileConnection;
  directory: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  markdownRemark: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  imageSharp: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  sitePlugin: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  staticImage: Maybe<StaticImage>;
  allStaticImage: StaticImageConnection;
};

export type QueryFileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type QueryAllFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QueryDirectoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type QueryAllDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QuerySiteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type QueryAllSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QuerySiteFunctionArgs = {
  functionRoute: Maybe<StringQueryOperatorInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type QueryAllSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QuerySitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  context: Maybe<SitePageContextFilterInput>;
};

export type QueryAllSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QueryMarkdownRemarkArgs = {
  id: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<FrontmatterFilterInput>;
  fields: Maybe<FieldsFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JsonQueryOperatorInput>;
  excerptAst: Maybe<JsonQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type QueryAllMarkdownRemarkArgs = {
  filter: Maybe<MarkdownRemarkFilterInput>;
  sort: Maybe<MarkdownRemarkSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QueryImageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JsonQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type QueryAllImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QuerySitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QuerySiteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QueryStaticImageArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  ino: Maybe<IntQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
};

export type QueryAllStaticImageArgs = {
  filter: Maybe<StaticImageFilterInput>;
  sort: Maybe<StaticImageSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type Site = Node & {
  buildTime: Maybe<Scalars["Date"]>;
  siteMetadata: Maybe<SiteSiteMetadata>;
  port: Maybe<Scalars["Int"]>;
  host: Maybe<Scalars["String"]>;
  polyfill: Maybe<Scalars["Boolean"]>;
  pathPrefix: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime: Maybe<Scalars["Date"]>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  sum: Maybe<Scalars["Float"]>;
  group: Array<SiteBuildMetadataGroupConnection>;
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "buildTime";

export type SiteBuildMetadataFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadataSortInput = {
  fields: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  sum: Maybe<Scalars["Float"]>;
  group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next: Maybe<Site>;
  node: Site;
  previous: Maybe<Site>;
};

export type SiteFieldsEnum =
  | "buildTime"
  | "siteMetadata___title"
  | "siteMetadata___description"
  | "siteMetadata___blog___description"
  | "siteMetadata___garden___description"
  | "siteMetadata___siteUrl"
  | "siteMetadata___author___name"
  | "siteMetadata___author___email"
  | "siteMetadata___social___linkedin"
  | "siteMetadata___social___twitter"
  | "siteMetadata___social___github"
  | "port"
  | "host"
  | "polyfill"
  | "pathPrefix"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type";

export type SiteFilterInput = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars["String"];
  pluginName: Scalars["String"];
  originalAbsoluteFilePath: Scalars["String"];
  originalRelativeFilePath: Scalars["String"];
  relativeCompiledFilePath: Scalars["String"];
  absoluteCompiledFilePath: Scalars["String"];
  matchPath: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteFunctionConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  sum: Maybe<Scalars["Float"]>;
  group: Array<SiteFunctionGroupConnection>;
};

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next: Maybe<SiteFunction>;
  node: SiteFunction;
  previous: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | "functionRoute"
  | "pluginName"
  | "originalAbsoluteFilePath"
  | "originalRelativeFilePath"
  | "relativeCompiledFilePath"
  | "absoluteCompiledFilePath"
  | "matchPath"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type";

export type SiteFunctionFilterInput = {
  functionRoute: Maybe<StringQueryOperatorInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type SiteFunctionGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type SiteFunctionSortInput = {
  fields: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type SitePage = Node & {
  path: Scalars["String"];
  component: Scalars["String"];
  internalComponentName: Scalars["String"];
  componentChunkName: Scalars["String"];
  matchPath: Maybe<Scalars["String"]>;
  isCreatedByStatefulCreatePages: Maybe<Scalars["Boolean"]>;
  pluginCreator: Maybe<SitePlugin>;
  pluginCreatorId: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  context: Maybe<SitePageContext>;
};

export type SitePageConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  sum: Maybe<Scalars["Float"]>;
  group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  id: Maybe<Scalars["String"]>;
  previousPostId: Maybe<Scalars["String"]>;
  nextPostId: Maybe<Scalars["String"]>;
};

export type SitePageContextFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  previousPostId: Maybe<StringQueryOperatorInput>;
  nextPostId: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next: Maybe<SitePage>;
  node: SitePage;
  previous: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | "path"
  | "component"
  | "internalComponentName"
  | "componentChunkName"
  | "matchPath"
  | "isCreatedByStatefulCreatePages"
  | "pluginCreator___id"
  | "pluginCreator___parent___id"
  | "pluginCreator___parent___parent___id"
  | "pluginCreator___parent___parent___children"
  | "pluginCreator___parent___children"
  | "pluginCreator___parent___children___id"
  | "pluginCreator___parent___children___children"
  | "pluginCreator___parent___internal___content"
  | "pluginCreator___parent___internal___contentDigest"
  | "pluginCreator___parent___internal___description"
  | "pluginCreator___parent___internal___fieldOwners"
  | "pluginCreator___parent___internal___ignoreType"
  | "pluginCreator___parent___internal___mediaType"
  | "pluginCreator___parent___internal___owner"
  | "pluginCreator___parent___internal___type"
  | "pluginCreator___children"
  | "pluginCreator___children___id"
  | "pluginCreator___children___parent___id"
  | "pluginCreator___children___parent___children"
  | "pluginCreator___children___children"
  | "pluginCreator___children___children___id"
  | "pluginCreator___children___children___children"
  | "pluginCreator___children___internal___content"
  | "pluginCreator___children___internal___contentDigest"
  | "pluginCreator___children___internal___description"
  | "pluginCreator___children___internal___fieldOwners"
  | "pluginCreator___children___internal___ignoreType"
  | "pluginCreator___children___internal___mediaType"
  | "pluginCreator___children___internal___owner"
  | "pluginCreator___children___internal___type"
  | "pluginCreator___internal___content"
  | "pluginCreator___internal___contentDigest"
  | "pluginCreator___internal___description"
  | "pluginCreator___internal___fieldOwners"
  | "pluginCreator___internal___ignoreType"
  | "pluginCreator___internal___mediaType"
  | "pluginCreator___internal___owner"
  | "pluginCreator___internal___type"
  | "pluginCreator___resolve"
  | "pluginCreator___name"
  | "pluginCreator___version"
  | "pluginCreator___pluginOptions___plugins"
  | "pluginCreator___pluginOptions___plugins___resolve"
  | "pluginCreator___pluginOptions___plugins___id"
  | "pluginCreator___pluginOptions___plugins___name"
  | "pluginCreator___pluginOptions___plugins___version"
  | "pluginCreator___pluginOptions___plugins___nodeAPIs"
  | "pluginCreator___pluginOptions___plugins___browserAPIs"
  | "pluginCreator___pluginOptions___plugins___ssrAPIs"
  | "pluginCreator___pluginOptions___plugins___pluginFilepath"
  | "pluginCreator___pluginOptions___path"
  | "pluginCreator___pluginOptions___name"
  | "pluginCreator___pluginOptions___maxWidth"
  | "pluginCreator___pluginOptions___linkImagesToOriginal"
  | "pluginCreator___pluginOptions___showCaptions"
  | "pluginCreator___pluginOptions___markdownCaptions"
  | "pluginCreator___pluginOptions___sizeByPixelDensity"
  | "pluginCreator___pluginOptions___backgroundColor"
  | "pluginCreator___pluginOptions___quality"
  | "pluginCreator___pluginOptions___withWebp"
  | "pluginCreator___pluginOptions___tracedSVG"
  | "pluginCreator___pluginOptions___loading"
  | "pluginCreator___pluginOptions___decoding"
  | "pluginCreator___pluginOptions___disableBgImageOnAlpha"
  | "pluginCreator___pluginOptions___disableBgImage"
  | "pluginCreator___pluginOptions___wrapperStyle"
  | "pluginCreator___pluginOptions___offsetY"
  | "pluginCreator___pluginOptions___className"
  | "pluginCreator___pluginOptions___inlineCodeMarker"
  | "pluginCreator___pluginOptions___showLineNumbers"
  | "pluginCreator___pluginOptions___base64Width"
  | "pluginCreator___pluginOptions___stripMetadata"
  | "pluginCreator___pluginOptions___defaultQuality"
  | "pluginCreator___pluginOptions___failOnError"
  | "pluginCreator___pluginOptions___short_name"
  | "pluginCreator___pluginOptions___start_url"
  | "pluginCreator___pluginOptions___background_color"
  | "pluginCreator___pluginOptions___theme_color"
  | "pluginCreator___pluginOptions___display"
  | "pluginCreator___pluginOptions___icon"
  | "pluginCreator___pluginOptions___legacy"
  | "pluginCreator___pluginOptions___theme_color_in_head"
  | "pluginCreator___pluginOptions___cache_busting_mode"
  | "pluginCreator___pluginOptions___crossOrigin"
  | "pluginCreator___pluginOptions___include_favicon"
  | "pluginCreator___pluginOptions___cacheDigest"
  | "pluginCreator___pluginOptions___siteUrl"
  | "pluginCreator___pluginOptions___pathCheck"
  | "pluginCreator___pluginOptions___allExtensions"
  | "pluginCreator___pluginOptions___isTSX"
  | "pluginCreator___pluginOptions___jsxPragma"
  | "pluginCreator___nodeAPIs"
  | "pluginCreator___browserAPIs"
  | "pluginCreator___ssrAPIs"
  | "pluginCreator___pluginFilepath"
  | "pluginCreator___packageJson___name"
  | "pluginCreator___packageJson___description"
  | "pluginCreator___packageJson___version"
  | "pluginCreator___packageJson___main"
  | "pluginCreator___packageJson___author"
  | "pluginCreator___packageJson___license"
  | "pluginCreator___packageJson___dependencies"
  | "pluginCreator___packageJson___dependencies___name"
  | "pluginCreator___packageJson___dependencies___version"
  | "pluginCreator___packageJson___devDependencies"
  | "pluginCreator___packageJson___devDependencies___name"
  | "pluginCreator___packageJson___devDependencies___version"
  | "pluginCreator___packageJson___peerDependencies"
  | "pluginCreator___packageJson___peerDependencies___name"
  | "pluginCreator___packageJson___peerDependencies___version"
  | "pluginCreator___packageJson___keywords"
  | "pluginCreatorId"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "context___id"
  | "context___previousPostId"
  | "context___nextPostId";

export type SitePageFilterInput = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  context: Maybe<SitePageContextFilterInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type SitePageSortInput = {
  fields: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve: Maybe<Scalars["String"]>;
  name: Maybe<Scalars["String"]>;
  version: Maybe<Scalars["String"]>;
  pluginOptions: Maybe<SitePluginPluginOptions>;
  nodeAPIs: Maybe<Array<Maybe<Scalars["String"]>>>;
  browserAPIs: Maybe<Array<Maybe<Scalars["String"]>>>;
  ssrAPIs: Maybe<Array<Maybe<Scalars["String"]>>>;
  pluginFilepath: Maybe<Scalars["String"]>;
  packageJson: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  sum: Maybe<Scalars["Float"]>;
  group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next: Maybe<SitePlugin>;
  node: SitePlugin;
  previous: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "resolve"
  | "name"
  | "version"
  | "pluginOptions___plugins"
  | "pluginOptions___plugins___resolve"
  | "pluginOptions___plugins___id"
  | "pluginOptions___plugins___name"
  | "pluginOptions___plugins___version"
  | "pluginOptions___plugins___pluginOptions___maxWidth"
  | "pluginOptions___plugins___pluginOptions___linkImagesToOriginal"
  | "pluginOptions___plugins___pluginOptions___showCaptions"
  | "pluginOptions___plugins___pluginOptions___markdownCaptions"
  | "pluginOptions___plugins___pluginOptions___sizeByPixelDensity"
  | "pluginOptions___plugins___pluginOptions___backgroundColor"
  | "pluginOptions___plugins___pluginOptions___quality"
  | "pluginOptions___plugins___pluginOptions___withWebp"
  | "pluginOptions___plugins___pluginOptions___tracedSVG"
  | "pluginOptions___plugins___pluginOptions___loading"
  | "pluginOptions___plugins___pluginOptions___decoding"
  | "pluginOptions___plugins___pluginOptions___disableBgImageOnAlpha"
  | "pluginOptions___plugins___pluginOptions___disableBgImage"
  | "pluginOptions___plugins___pluginOptions___wrapperStyle"
  | "pluginOptions___plugins___pluginOptions___offsetY"
  | "pluginOptions___plugins___pluginOptions___className"
  | "pluginOptions___plugins___pluginOptions___inlineCodeMarker"
  | "pluginOptions___plugins___pluginOptions___showLineNumbers"
  | "pluginOptions___plugins___nodeAPIs"
  | "pluginOptions___plugins___browserAPIs"
  | "pluginOptions___plugins___ssrAPIs"
  | "pluginOptions___plugins___pluginFilepath"
  | "pluginOptions___path"
  | "pluginOptions___name"
  | "pluginOptions___maxWidth"
  | "pluginOptions___linkImagesToOriginal"
  | "pluginOptions___showCaptions"
  | "pluginOptions___markdownCaptions"
  | "pluginOptions___sizeByPixelDensity"
  | "pluginOptions___backgroundColor"
  | "pluginOptions___quality"
  | "pluginOptions___withWebp"
  | "pluginOptions___tracedSVG"
  | "pluginOptions___loading"
  | "pluginOptions___decoding"
  | "pluginOptions___disableBgImageOnAlpha"
  | "pluginOptions___disableBgImage"
  | "pluginOptions___wrapperStyle"
  | "pluginOptions___offsetY"
  | "pluginOptions___className"
  | "pluginOptions___inlineCodeMarker"
  | "pluginOptions___showLineNumbers"
  | "pluginOptions___base64Width"
  | "pluginOptions___stripMetadata"
  | "pluginOptions___defaultQuality"
  | "pluginOptions___failOnError"
  | "pluginOptions___short_name"
  | "pluginOptions___start_url"
  | "pluginOptions___background_color"
  | "pluginOptions___theme_color"
  | "pluginOptions___display"
  | "pluginOptions___icon"
  | "pluginOptions___legacy"
  | "pluginOptions___theme_color_in_head"
  | "pluginOptions___cache_busting_mode"
  | "pluginOptions___crossOrigin"
  | "pluginOptions___include_favicon"
  | "pluginOptions___cacheDigest"
  | "pluginOptions___siteUrl"
  | "pluginOptions___pathCheck"
  | "pluginOptions___allExtensions"
  | "pluginOptions___isTSX"
  | "pluginOptions___jsxPragma"
  | "nodeAPIs"
  | "browserAPIs"
  | "ssrAPIs"
  | "pluginFilepath"
  | "packageJson___name"
  | "packageJson___description"
  | "packageJson___version"
  | "packageJson___main"
  | "packageJson___author"
  | "packageJson___license"
  | "packageJson___dependencies"
  | "packageJson___dependencies___name"
  | "packageJson___dependencies___version"
  | "packageJson___devDependencies"
  | "packageJson___devDependencies___name"
  | "packageJson___devDependencies___version"
  | "packageJson___peerDependencies"
  | "packageJson___peerDependencies___name"
  | "packageJson___peerDependencies___version"
  | "packageJson___keywords";

export type SitePluginFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJson = {
  name: Maybe<Scalars["String"]>;
  description: Maybe<Scalars["String"]>;
  version: Maybe<Scalars["String"]>;
  main: Maybe<Scalars["String"]>;
  author: Maybe<Scalars["String"]>;
  license: Maybe<Scalars["String"]>;
  dependencies: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type SitePluginPackageJsonDependencies = {
  name: Maybe<Scalars["String"]>;
  version: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name: Maybe<Scalars["String"]>;
  version: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  main: Maybe<StringQueryOperatorInput>;
  author: Maybe<StringQueryOperatorInput>;
  license: Maybe<StringQueryOperatorInput>;
  dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name: Maybe<Scalars["String"]>;
  version: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  plugins: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
  path: Maybe<Scalars["String"]>;
  name: Maybe<Scalars["String"]>;
  maxWidth: Maybe<Scalars["Int"]>;
  linkImagesToOriginal: Maybe<Scalars["Boolean"]>;
  showCaptions: Maybe<Scalars["Boolean"]>;
  markdownCaptions: Maybe<Scalars["Boolean"]>;
  sizeByPixelDensity: Maybe<Scalars["Boolean"]>;
  backgroundColor: Maybe<Scalars["String"]>;
  quality: Maybe<Scalars["Int"]>;
  withWebp: Maybe<Scalars["Boolean"]>;
  tracedSVG: Maybe<Scalars["Boolean"]>;
  loading: Maybe<Scalars["String"]>;
  decoding: Maybe<Scalars["String"]>;
  disableBgImageOnAlpha: Maybe<Scalars["Boolean"]>;
  disableBgImage: Maybe<Scalars["Boolean"]>;
  wrapperStyle: Maybe<Scalars["String"]>;
  offsetY: Maybe<Scalars["Int"]>;
  className: Maybe<Scalars["String"]>;
  inlineCodeMarker: Maybe<Scalars["String"]>;
  showLineNumbers: Maybe<Scalars["Boolean"]>;
  base64Width: Maybe<Scalars["Int"]>;
  stripMetadata: Maybe<Scalars["Boolean"]>;
  defaultQuality: Maybe<Scalars["Int"]>;
  failOnError: Maybe<Scalars["Boolean"]>;
  short_name: Maybe<Scalars["String"]>;
  start_url: Maybe<Scalars["String"]>;
  background_color: Maybe<Scalars["String"]>;
  theme_color: Maybe<Scalars["String"]>;
  display: Maybe<Scalars["String"]>;
  icon: Maybe<Scalars["String"]>;
  legacy: Maybe<Scalars["Boolean"]>;
  theme_color_in_head: Maybe<Scalars["Boolean"]>;
  cache_busting_mode: Maybe<Scalars["String"]>;
  crossOrigin: Maybe<Scalars["String"]>;
  include_favicon: Maybe<Scalars["Boolean"]>;
  cacheDigest: Maybe<Scalars["String"]>;
  siteUrl: Maybe<Scalars["String"]>;
  pathCheck: Maybe<Scalars["Boolean"]>;
  allExtensions: Maybe<Scalars["Boolean"]>;
  isTSX: Maybe<Scalars["Boolean"]>;
  jsxPragma: Maybe<Scalars["String"]>;
};

export type SitePluginPluginOptionsFilterInput = {
  plugins: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  path: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  maxWidth: Maybe<IntQueryOperatorInput>;
  linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
  showCaptions: Maybe<BooleanQueryOperatorInput>;
  markdownCaptions: Maybe<BooleanQueryOperatorInput>;
  sizeByPixelDensity: Maybe<BooleanQueryOperatorInput>;
  backgroundColor: Maybe<StringQueryOperatorInput>;
  quality: Maybe<IntQueryOperatorInput>;
  withWebp: Maybe<BooleanQueryOperatorInput>;
  tracedSVG: Maybe<BooleanQueryOperatorInput>;
  loading: Maybe<StringQueryOperatorInput>;
  decoding: Maybe<StringQueryOperatorInput>;
  disableBgImageOnAlpha: Maybe<BooleanQueryOperatorInput>;
  disableBgImage: Maybe<BooleanQueryOperatorInput>;
  wrapperStyle: Maybe<StringQueryOperatorInput>;
  offsetY: Maybe<IntQueryOperatorInput>;
  className: Maybe<StringQueryOperatorInput>;
  inlineCodeMarker: Maybe<StringQueryOperatorInput>;
  showLineNumbers: Maybe<BooleanQueryOperatorInput>;
  base64Width: Maybe<IntQueryOperatorInput>;
  stripMetadata: Maybe<BooleanQueryOperatorInput>;
  defaultQuality: Maybe<IntQueryOperatorInput>;
  failOnError: Maybe<BooleanQueryOperatorInput>;
  short_name: Maybe<StringQueryOperatorInput>;
  start_url: Maybe<StringQueryOperatorInput>;
  background_color: Maybe<StringQueryOperatorInput>;
  theme_color: Maybe<StringQueryOperatorInput>;
  display: Maybe<StringQueryOperatorInput>;
  icon: Maybe<StringQueryOperatorInput>;
  legacy: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  cache_busting_mode: Maybe<StringQueryOperatorInput>;
  crossOrigin: Maybe<StringQueryOperatorInput>;
  include_favicon: Maybe<BooleanQueryOperatorInput>;
  cacheDigest: Maybe<StringQueryOperatorInput>;
  siteUrl: Maybe<StringQueryOperatorInput>;
  pathCheck: Maybe<BooleanQueryOperatorInput>;
  allExtensions: Maybe<BooleanQueryOperatorInput>;
  isTSX: Maybe<BooleanQueryOperatorInput>;
  jsxPragma: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPlugins = {
  resolve: Maybe<Scalars["String"]>;
  id: Maybe<Scalars["String"]>;
  name: Maybe<Scalars["String"]>;
  version: Maybe<Scalars["String"]>;
  pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  nodeAPIs: Maybe<Array<Maybe<Scalars["String"]>>>;
  browserAPIs: Maybe<Array<Maybe<Scalars["String"]>>>;
  ssrAPIs: Maybe<Array<Maybe<Scalars["String"]>>>;
  pluginFilepath: Maybe<Scalars["String"]>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  maxWidth: Maybe<Scalars["Int"]>;
  linkImagesToOriginal: Maybe<Scalars["Boolean"]>;
  showCaptions: Maybe<Scalars["Boolean"]>;
  markdownCaptions: Maybe<Scalars["Boolean"]>;
  sizeByPixelDensity: Maybe<Scalars["Boolean"]>;
  backgroundColor: Maybe<Scalars["String"]>;
  quality: Maybe<Scalars["Int"]>;
  withWebp: Maybe<Scalars["Boolean"]>;
  tracedSVG: Maybe<Scalars["Boolean"]>;
  loading: Maybe<Scalars["String"]>;
  decoding: Maybe<Scalars["String"]>;
  disableBgImageOnAlpha: Maybe<Scalars["Boolean"]>;
  disableBgImage: Maybe<Scalars["Boolean"]>;
  wrapperStyle: Maybe<Scalars["String"]>;
  offsetY: Maybe<Scalars["Int"]>;
  className: Maybe<Scalars["String"]>;
  inlineCodeMarker: Maybe<Scalars["String"]>;
  showLineNumbers: Maybe<Scalars["Boolean"]>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  maxWidth: Maybe<IntQueryOperatorInput>;
  linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
  showCaptions: Maybe<BooleanQueryOperatorInput>;
  markdownCaptions: Maybe<BooleanQueryOperatorInput>;
  sizeByPixelDensity: Maybe<BooleanQueryOperatorInput>;
  backgroundColor: Maybe<StringQueryOperatorInput>;
  quality: Maybe<IntQueryOperatorInput>;
  withWebp: Maybe<BooleanQueryOperatorInput>;
  tracedSVG: Maybe<BooleanQueryOperatorInput>;
  loading: Maybe<StringQueryOperatorInput>;
  decoding: Maybe<StringQueryOperatorInput>;
  disableBgImageOnAlpha: Maybe<BooleanQueryOperatorInput>;
  disableBgImage: Maybe<BooleanQueryOperatorInput>;
  wrapperStyle: Maybe<StringQueryOperatorInput>;
  offsetY: Maybe<IntQueryOperatorInput>;
  className: Maybe<StringQueryOperatorInput>;
  inlineCodeMarker: Maybe<StringQueryOperatorInput>;
  showLineNumbers: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title: Maybe<Scalars["String"]>;
  description: Maybe<Scalars["String"]>;
  blog: Maybe<SiteSiteMetadataBlog>;
  garden: Maybe<SiteSiteMetadataGarden>;
  siteUrl: Maybe<Scalars["String"]>;
  author: Maybe<SiteSiteMetadataAuthor>;
  social: Maybe<SiteSiteMetadataSocial>;
};

export type SiteSiteMetadataAuthor = {
  name: Maybe<Scalars["String"]>;
  email: Maybe<Scalars["String"]>;
};

export type SiteSiteMetadataAuthorFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  email: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataBlog = {
  description: Maybe<Scalars["String"]>;
};

export type SiteSiteMetadataBlogFilterInput = {
  description: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataFilterInput = {
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  blog: Maybe<SiteSiteMetadataBlogFilterInput>;
  garden: Maybe<SiteSiteMetadataGardenFilterInput>;
  siteUrl: Maybe<StringQueryOperatorInput>;
  author: Maybe<SiteSiteMetadataAuthorFilterInput>;
  social: Maybe<SiteSiteMetadataSocialFilterInput>;
};

export type SiteSiteMetadataGarden = {
  description: Maybe<Scalars["String"]>;
};

export type SiteSiteMetadataGardenFilterInput = {
  description: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataSocial = {
  linkedin: Maybe<Scalars["String"]>;
  twitter: Maybe<Scalars["String"]>;
  github: Maybe<Scalars["String"]>;
};

export type SiteSiteMetadataSocialFilterInput = {
  linkedin: Maybe<StringQueryOperatorInput>;
  twitter: Maybe<StringQueryOperatorInput>;
  github: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = "ASC" | "DESC";

export type StaticImage = Node & {
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  sourceInstanceName: Maybe<Scalars["String"]>;
  relativePath: Maybe<Scalars["String"]>;
  extension: Maybe<Scalars["String"]>;
  prettySize: Maybe<Scalars["String"]>;
  modifiedTime: Maybe<Scalars["Date"]>;
  accessTime: Maybe<Scalars["Date"]>;
  changeTime: Maybe<Scalars["Date"]>;
  birthTime: Maybe<Scalars["Date"]>;
  root: Maybe<Scalars["String"]>;
  dir: Maybe<Scalars["String"]>;
  base: Maybe<Scalars["String"]>;
  ext: Maybe<Scalars["String"]>;
  name: Maybe<Scalars["String"]>;
  absolutePath: Maybe<Scalars["String"]>;
  relativeDirectory: Maybe<Scalars["String"]>;
  dev: Maybe<Scalars["Int"]>;
  mode: Maybe<Scalars["Int"]>;
  nlink: Maybe<Scalars["Int"]>;
  uid: Maybe<Scalars["Int"]>;
  rdev: Maybe<Scalars["Int"]>;
  blksize: Maybe<Scalars["Int"]>;
  ino: Maybe<Scalars["Int"]>;
  size: Maybe<Scalars["Int"]>;
  blocks: Maybe<Scalars["Int"]>;
  atimeMs: Maybe<Scalars["Float"]>;
  mtimeMs: Maybe<Scalars["Float"]>;
  ctimeMs: Maybe<Scalars["Float"]>;
  birthtimeMs: Maybe<Scalars["Float"]>;
  atime: Maybe<Scalars["Date"]>;
  mtime: Maybe<Scalars["Date"]>;
  ctime: Maybe<Scalars["Date"]>;
  birthtime: Maybe<Scalars["Date"]>;
};

export type StaticImageModifiedTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type StaticImageAccessTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type StaticImageChangeTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type StaticImageBirthTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type StaticImageAtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type StaticImageMtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type StaticImageCtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type StaticImageBirthtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type StaticImageConnection = {
  totalCount: Scalars["Int"];
  edges: Array<StaticImageEdge>;
  nodes: Array<StaticImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  sum: Maybe<Scalars["Float"]>;
  group: Array<StaticImageGroupConnection>;
};

export type StaticImageConnectionDistinctArgs = {
  field: StaticImageFieldsEnum;
};

export type StaticImageConnectionMaxArgs = {
  field: StaticImageFieldsEnum;
};

export type StaticImageConnectionMinArgs = {
  field: StaticImageFieldsEnum;
};

export type StaticImageConnectionSumArgs = {
  field: StaticImageFieldsEnum;
};

export type StaticImageConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: StaticImageFieldsEnum;
};

export type StaticImageEdge = {
  next: Maybe<StaticImage>;
  node: StaticImage;
  previous: Maybe<StaticImage>;
};

export type StaticImageFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "sourceInstanceName"
  | "relativePath"
  | "extension"
  | "prettySize"
  | "modifiedTime"
  | "accessTime"
  | "changeTime"
  | "birthTime"
  | "root"
  | "dir"
  | "base"
  | "ext"
  | "name"
  | "absolutePath"
  | "relativeDirectory"
  | "dev"
  | "mode"
  | "nlink"
  | "uid"
  | "rdev"
  | "blksize"
  | "ino"
  | "size"
  | "blocks"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "birthtimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime";

export type StaticImageFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  ino: Maybe<IntQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
};

export type StaticImageGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<StaticImageEdge>;
  nodes: Array<StaticImage>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type StaticImageSortInput = {
  fields: Maybe<Array<Maybe<StaticImageFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StringQueryOperatorInput = {
  eq: Maybe<Scalars["String"]>;
  ne: Maybe<Scalars["String"]>;
  in: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex: Maybe<Scalars["String"]>;
  glob: Maybe<Scalars["String"]>;
};

export type TransformOptions = {
  grayscale: Maybe<Scalars["Boolean"]>;
  duotone: Maybe<DuotoneGradient>;
  rotate: Maybe<Scalars["Int"]>;
  trim: Maybe<Scalars["Float"]>;
  cropFocus: Maybe<ImageCropFocus>;
  fit: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality: Maybe<Scalars["Int"]>;
};

export type EmailContactLinkQueryVariables = Exact<{ [key: string]: never }>;

export type EmailContactLinkQuery = {
  site: Maybe<{
    siteMetadata: Maybe<{ author: Maybe<{ email: Maybe<string> }> }>;
  }>;
};

export type SeoQueryVariables = Exact<{ [key: string]: never }>;

export type SeoQuery = {
  site: Maybe<{
    siteMetadata: Maybe<{
      title: Maybe<string>;
      description: Maybe<string>;
      author: Maybe<{ name: Maybe<string> }>;
    }>;
  }>;
};

export type AboutPageQueryVariables = Exact<{ [key: string]: never }>;

export type AboutPageQuery = {
  site: Maybe<{
    siteMetadata: Maybe<{
      social: Maybe<{ github: Maybe<string>; linkedin: Maybe<string> }>;
      author: Maybe<{ name: Maybe<string> }>;
    }>;
  }>;
};

export type BlogIndexQueryVariables = Exact<{ [key: string]: never }>;

export type BlogIndexQuery = {
  allMarkdownRemark: {
    nodes: Array<{
      frontmatter: Maybe<{ slug: Maybe<string> }>;
      fields: { slug: string };
    }>;
  };
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_1_Query = { site: Maybe<{ buildTime: Maybe<any> }> };

export type BlogPostBySlugQueryVariables = Exact<{
  id: Scalars["String"];
  previousPostId: Maybe<Scalars["String"]>;
  nextPostId: Maybe<Scalars["String"]>;
}>;

export type BlogPostBySlugQuery = {
  site: Maybe<{ siteMetadata: Maybe<{ title: Maybe<string> }> }>;
  markdownRemark: Maybe<{
    id: string;
    excerpt: Maybe<string>;
    html: Maybe<string>;
    frontmatter: Maybe<{
      title: Maybe<string>;
      date: Maybe<any>;
      spoiler: Maybe<string>;
    }>;
  }>;
  previous: Maybe<{
    fields: { slug: string };
    frontmatter: Maybe<{ title: Maybe<string> }>;
  }>;
  next: Maybe<{
    fields: { slug: string };
    frontmatter: Maybe<{ title: Maybe<string> }>;
  }>;
};

export type GatsbyImageSharpFixedFragment = {
  base64: Maybe<string>;
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_TracedSvgFragment = {
  tracedSVG: Maybe<string>;
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_WithWebpFragment = {
  base64: Maybe<string>;
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp: Maybe<string>;
  srcSetWebp: Maybe<string>;
};

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
  tracedSVG: Maybe<string>;
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp: Maybe<string>;
  srcSetWebp: Maybe<string>;
};

export type GatsbyImageSharpFixed_NoBase64Fragment = {
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp: Maybe<string>;
  srcSetWebp: Maybe<string>;
};

export type GatsbyImageSharpFluidFragment = {
  base64: Maybe<string>;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
  maxHeight: number;
  maxWidth: number;
};

export type GatsbyImageSharpFluid_TracedSvgFragment = {
  tracedSVG: Maybe<string>;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebpFragment = {
  base64: Maybe<string>;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp: Maybe<string>;
  srcSetWebp: Maybe<string>;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
  tracedSVG: Maybe<string>;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp: Maybe<string>;
  srcSetWebp: Maybe<string>;
  sizes: string;
};

export type GatsbyImageSharpFluid_NoBase64Fragment = {
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp: Maybe<string>;
  srcSetWebp: Maybe<string>;
  sizes: string;
};