/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  Hex: { input: any; output: any; }
  /** Raw JSON value */
  Json: { input: any; output: any; }
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: any; output: any; }
  RGBAHue: { input: any; output: any; }
  RGBATransparency: { input: any; output: any; }
  /** Slate-compatible RichText AST */
  RichTextAST: { input: any; output: any; }
};

export type Aggregate = {
  count: Scalars['Int']['output'];
};

/** Asset system model */
export type Asset = Entity & Node & {
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String']['output'];
  /** The file handle */
  handle: Scalars['String']['output'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']['output']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']['output'];
  /** The file width */
  width?: Maybe<Scalars['Float']['output']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName: Scalars['String']['input'];
  handle: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Float']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName: Scalars['String']['input'];
  handle: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type AssetOrderByInput =
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'fileName_ASC'
  | 'fileName_DESC'
  | 'handle_ASC'
  | 'handle_DESC'
  | 'height_ASC'
  | 'height_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'mimeType_ASC'
  | 'mimeType_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'size_ASC'
  | 'size_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'width_ASC'
  | 'width_DESC';

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BatchPayload = {
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']['output'];
};

export type Cart = Entity & Node & {
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Cart>;
  /** List of Cart versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  items: Array<CartItem>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  total: Scalars['Int']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type CartCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CartDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type CartHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type CartItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CartItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CartItemWhereInput>;
};


export type CartPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CartScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type CartUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CartConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CartWhereUniqueInput;
};

/** A connection to a list of items. */
export type CartConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CartEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CartCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  items?: InputMaybe<CartItemCreateManyInlineInput>;
  total: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CartCreateManyInlineInput = {
  /** Connect multiple existing Cart documents */
  connect?: InputMaybe<Array<CartWhereUniqueInput>>;
  /** Create and connect multiple existing Cart documents */
  create?: InputMaybe<Array<CartCreateInput>>;
};

export type CartCreateOneInlineInput = {
  /** Connect one existing Cart document */
  connect?: InputMaybe<CartWhereUniqueInput>;
  /** Create and connect one Cart document */
  create?: InputMaybe<CartCreateInput>;
};

/** An edge in a connection. */
export type CartEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Cart;
};

export type CartItem = Entity & Node & {
  cart?: Maybe<Cart>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<CartItem>;
  /** List of CartItem versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  product?: Maybe<Product>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  quantity: Scalars['Int']['output'];
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  totalPrice: Scalars['Int']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type CartItemCartArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CartItemCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CartItemDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type CartItemHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type CartItemProductArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CartItemPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CartItemScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type CartItemUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CartItemConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CartItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type CartItemConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CartItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CartItemCreateInput = {
  cart?: InputMaybe<CartCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  product?: InputMaybe<ProductCreateOneInlineInput>;
  quantity: Scalars['Int']['input'];
  totalPrice: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CartItemCreateManyInlineInput = {
  /** Connect multiple existing CartItem documents */
  connect?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  /** Create and connect multiple existing CartItem documents */
  create?: InputMaybe<Array<CartItemCreateInput>>;
};

export type CartItemCreateOneInlineInput = {
  /** Connect one existing CartItem document */
  connect?: InputMaybe<CartItemWhereUniqueInput>;
  /** Create and connect one CartItem document */
  create?: InputMaybe<CartItemCreateInput>;
};

/** An edge in a connection. */
export type CartItemEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CartItem;
};

/** Identifies documents */
export type CartItemManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CartItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CartItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CartItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  cart?: InputMaybe<CartWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<CartItemWhereStageInput>;
  documentInStages_none?: InputMaybe<CartItemWhereStageInput>;
  documentInStages_some?: InputMaybe<CartItemWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  product?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  quantity_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  quantity_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  quantity_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  quantity_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  quantity_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  quantity_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  totalPrice?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  totalPrice_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  totalPrice_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  totalPrice_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  totalPrice_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  totalPrice_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  totalPrice_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  totalPrice_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type CartItemOrderByInput =
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'quantity_ASC'
  | 'quantity_DESC'
  | 'totalPrice_ASC'
  | 'totalPrice_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type CartItemUpdateInput = {
  cart?: InputMaybe<CartUpdateOneInlineInput>;
  product?: InputMaybe<ProductUpdateOneInlineInput>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  totalPrice?: InputMaybe<Scalars['Int']['input']>;
};

export type CartItemUpdateManyInlineInput = {
  /** Connect multiple existing CartItem documents */
  connect?: InputMaybe<Array<CartItemConnectInput>>;
  /** Create and connect multiple CartItem documents */
  create?: InputMaybe<Array<CartItemCreateInput>>;
  /** Delete multiple CartItem documents */
  delete?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  /** Disconnect multiple CartItem documents */
  disconnect?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing CartItem documents */
  set?: InputMaybe<Array<CartItemWhereUniqueInput>>;
  /** Update multiple CartItem documents */
  update?: InputMaybe<Array<CartItemUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CartItem documents */
  upsert?: InputMaybe<Array<CartItemUpsertWithNestedWhereUniqueInput>>;
};

export type CartItemUpdateManyInput = {
  quantity?: InputMaybe<Scalars['Int']['input']>;
  totalPrice?: InputMaybe<Scalars['Int']['input']>;
};

export type CartItemUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CartItemUpdateManyInput;
  /** Document search */
  where: CartItemWhereInput;
};

export type CartItemUpdateOneInlineInput = {
  /** Connect existing CartItem document */
  connect?: InputMaybe<CartItemWhereUniqueInput>;
  /** Create and connect one CartItem document */
  create?: InputMaybe<CartItemCreateInput>;
  /** Delete currently connected CartItem document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected CartItem document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single CartItem document */
  update?: InputMaybe<CartItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CartItem document */
  upsert?: InputMaybe<CartItemUpsertWithNestedWhereUniqueInput>;
};

export type CartItemUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CartItemUpdateInput;
  /** Unique document search */
  where: CartItemWhereUniqueInput;
};

export type CartItemUpsertInput = {
  /** Create document if it didn't exist */
  create: CartItemCreateInput;
  /** Update document if it exists */
  update: CartItemUpdateInput;
};

export type CartItemUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CartItemUpsertInput;
  /** Unique document search */
  where: CartItemWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CartItemWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type CartItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CartItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CartItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CartItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  cart?: InputMaybe<CartWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<CartItemWhereStageInput>;
  documentInStages_none?: InputMaybe<CartItemWhereStageInput>;
  documentInStages_some?: InputMaybe<CartItemWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  product?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  quantity_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  quantity_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  quantity_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  quantity_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  quantity_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  quantity_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  totalPrice?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  totalPrice_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  totalPrice_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  totalPrice_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  totalPrice_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  totalPrice_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  totalPrice_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  totalPrice_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CartItemWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CartItemWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CartItemWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CartItemWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CartItemWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References CartItem record uniquely */
export type CartItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Identifies documents */
export type CartManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CartWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CartWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CartWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<CartWhereStageInput>;
  documentInStages_none?: InputMaybe<CartWhereStageInput>;
  documentInStages_some?: InputMaybe<CartWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  items_every?: InputMaybe<CartItemWhereInput>;
  items_none?: InputMaybe<CartItemWhereInput>;
  items_some?: InputMaybe<CartItemWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  total?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  total_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  total_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  total_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  total_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  total_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  total_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  total_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type CartOrderByInput =
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'total_ASC'
  | 'total_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type CartUpdateInput = {
  items?: InputMaybe<CartItemUpdateManyInlineInput>;
  total?: InputMaybe<Scalars['Int']['input']>;
};

export type CartUpdateManyInlineInput = {
  /** Connect multiple existing Cart documents */
  connect?: InputMaybe<Array<CartConnectInput>>;
  /** Create and connect multiple Cart documents */
  create?: InputMaybe<Array<CartCreateInput>>;
  /** Delete multiple Cart documents */
  delete?: InputMaybe<Array<CartWhereUniqueInput>>;
  /** Disconnect multiple Cart documents */
  disconnect?: InputMaybe<Array<CartWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Cart documents */
  set?: InputMaybe<Array<CartWhereUniqueInput>>;
  /** Update multiple Cart documents */
  update?: InputMaybe<Array<CartUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Cart documents */
  upsert?: InputMaybe<Array<CartUpsertWithNestedWhereUniqueInput>>;
};

export type CartUpdateManyInput = {
  total?: InputMaybe<Scalars['Int']['input']>;
};

export type CartUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CartUpdateManyInput;
  /** Document search */
  where: CartWhereInput;
};

export type CartUpdateOneInlineInput = {
  /** Connect existing Cart document */
  connect?: InputMaybe<CartWhereUniqueInput>;
  /** Create and connect one Cart document */
  create?: InputMaybe<CartCreateInput>;
  /** Delete currently connected Cart document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Cart document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Cart document */
  update?: InputMaybe<CartUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Cart document */
  upsert?: InputMaybe<CartUpsertWithNestedWhereUniqueInput>;
};

export type CartUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CartUpdateInput;
  /** Unique document search */
  where: CartWhereUniqueInput;
};

export type CartUpsertInput = {
  /** Create document if it didn't exist */
  create: CartCreateInput;
  /** Update document if it exists */
  update: CartUpdateInput;
};

export type CartUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CartUpsertInput;
  /** Unique document search */
  where: CartWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CartWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type CartWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CartWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CartWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CartWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<CartWhereStageInput>;
  documentInStages_none?: InputMaybe<CartWhereStageInput>;
  documentInStages_some?: InputMaybe<CartWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  items_every?: InputMaybe<CartItemWhereInput>;
  items_none?: InputMaybe<CartItemWhereInput>;
  items_some?: InputMaybe<CartItemWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  total?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  total_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  total_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  total_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  total_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  total_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  total_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  total_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CartWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CartWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CartWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CartWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CartWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Cart record uniquely */
export type CartWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Category = Entity & Node & {
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<Category>;
  /** List of Category versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type CategoryCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CategoryDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type CategoryHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type CategoryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type CategoryPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CategoryScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type CategoryUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CategoryConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CategoryWhereUniqueInput;
};

/** A connection to a list of items. */
export type CategoryConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CategoryEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CategoryCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  products?: InputMaybe<ProductCreateManyInlineInput>;
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryCreateManyInlineInput = {
  /** Connect multiple existing Category documents */
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Create and connect multiple existing Category documents */
  create?: InputMaybe<Array<CategoryCreateInput>>;
};

export type CategoryCreateOneInlineInput = {
  /** Connect one existing Category document */
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  /** Create and connect one Category document */
  create?: InputMaybe<CategoryCreateInput>;
};

/** An edge in a connection. */
export type CategoryEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Category;
};

/** Identifies documents */
export type CategoryManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<CategoryWhereStageInput>;
  documentInStages_none?: InputMaybe<CategoryWhereStageInput>;
  documentInStages_some?: InputMaybe<CategoryWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  products_every?: InputMaybe<ProductWhereInput>;
  products_none?: InputMaybe<ProductWhereInput>;
  products_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type CategoryOrderByInput =
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'slug_ASC'
  | 'slug_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type CategoryUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<ProductUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryUpdateManyInlineInput = {
  /** Connect multiple existing Category documents */
  connect?: InputMaybe<Array<CategoryConnectInput>>;
  /** Create and connect multiple Category documents */
  create?: InputMaybe<Array<CategoryCreateInput>>;
  /** Delete multiple Category documents */
  delete?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Disconnect multiple Category documents */
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Category documents */
  set?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Update multiple Category documents */
  update?: InputMaybe<Array<CategoryUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Category documents */
  upsert?: InputMaybe<Array<CategoryUpsertWithNestedWhereUniqueInput>>;
};

export type CategoryUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CategoryUpdateManyInput;
  /** Document search */
  where: CategoryWhereInput;
};

export type CategoryUpdateOneInlineInput = {
  /** Connect existing Category document */
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  /** Create and connect one Category document */
  create?: InputMaybe<CategoryCreateInput>;
  /** Delete currently connected Category document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Category document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Category document */
  update?: InputMaybe<CategoryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Category document */
  upsert?: InputMaybe<CategoryUpsertWithNestedWhereUniqueInput>;
};

export type CategoryUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CategoryUpdateInput;
  /** Unique document search */
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertInput = {
  /** Create document if it didn't exist */
  create: CategoryCreateInput;
  /** Update document if it exists */
  update: CategoryUpdateInput;
};

export type CategoryUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CategoryUpsertInput;
  /** Unique document search */
  where: CategoryWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CategoryWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type CategoryWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<CategoryWhereStageInput>;
  documentInStages_none?: InputMaybe<CategoryWhereStageInput>;
  documentInStages_some?: InputMaybe<CategoryWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  products_every?: InputMaybe<ProductWhereInput>;
  products_none?: InputMaybe<ProductWhereInput>;
  products_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CategoryWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CategoryWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Category record uniquely */
export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Collection = Entity & Node & {
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<Collection>;
  /** List of Collection versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  products: Array<Product>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type CollectionCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CollectionDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type CollectionHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type CollectionProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type CollectionPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CollectionScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type CollectionUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CollectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CollectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type CollectionConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CollectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CollectionCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<ProductCreateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CollectionCreateManyInlineInput = {
  /** Connect multiple existing Collection documents */
  connect?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  /** Create and connect multiple existing Collection documents */
  create?: InputMaybe<Array<CollectionCreateInput>>;
};

export type CollectionCreateOneInlineInput = {
  /** Connect one existing Collection document */
  connect?: InputMaybe<CollectionWhereUniqueInput>;
  /** Create and connect one Collection document */
  create?: InputMaybe<CollectionCreateInput>;
};

/** An edge in a connection. */
export type CollectionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Collection;
};

/** Identifies documents */
export type CollectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CollectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CollectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CollectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<CollectionWhereStageInput>;
  documentInStages_none?: InputMaybe<CollectionWhereStageInput>;
  documentInStages_some?: InputMaybe<CollectionWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  products_every?: InputMaybe<ProductWhereInput>;
  products_none?: InputMaybe<ProductWhereInput>;
  products_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type CollectionOrderByInput =
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'slug_ASC'
  | 'slug_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type CollectionUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<ProductUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionUpdateManyInlineInput = {
  /** Connect multiple existing Collection documents */
  connect?: InputMaybe<Array<CollectionConnectInput>>;
  /** Create and connect multiple Collection documents */
  create?: InputMaybe<Array<CollectionCreateInput>>;
  /** Delete multiple Collection documents */
  delete?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  /** Disconnect multiple Collection documents */
  disconnect?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Collection documents */
  set?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  /** Update multiple Collection documents */
  update?: InputMaybe<Array<CollectionUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Collection documents */
  upsert?: InputMaybe<Array<CollectionUpsertWithNestedWhereUniqueInput>>;
};

export type CollectionUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CollectionUpdateManyInput;
  /** Document search */
  where: CollectionWhereInput;
};

export type CollectionUpdateOneInlineInput = {
  /** Connect existing Collection document */
  connect?: InputMaybe<CollectionWhereUniqueInput>;
  /** Create and connect one Collection document */
  create?: InputMaybe<CollectionCreateInput>;
  /** Delete currently connected Collection document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Collection document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Collection document */
  update?: InputMaybe<CollectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Collection document */
  upsert?: InputMaybe<CollectionUpsertWithNestedWhereUniqueInput>;
};

export type CollectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CollectionUpdateInput;
  /** Unique document search */
  where: CollectionWhereUniqueInput;
};

export type CollectionUpsertInput = {
  /** Create document if it didn't exist */
  create: CollectionCreateInput;
  /** Update document if it exists */
  update: CollectionUpdateInput;
};

export type CollectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CollectionUpsertInput;
  /** Unique document search */
  where: CollectionWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CollectionWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type CollectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CollectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CollectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CollectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<CollectionWhereStageInput>;
  documentInStages_none?: InputMaybe<CollectionWhereStageInput>;
  documentInStages_some?: InputMaybe<CollectionWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  products_every?: InputMaybe<ProductWhereInput>;
  products_none?: InputMaybe<ProductWhereInput>;
  products_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CollectionWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CollectionWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CollectionWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CollectionWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CollectionWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Collection record uniquely */
export type CollectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  css: Scalars['String']['output'];
  hex: Scalars['Hex']['output'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']['input']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']['input']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DocumentFileTypes =
  | 'doc'
  | 'docx'
  | 'html'
  | 'jpg'
  | 'odp'
  | 'ods'
  | 'odt'
  | 'pdf'
  | 'png'
  | 'ppt'
  | 'pptx'
  | 'svg'
  | 'txt'
  | 'webp'
  | 'xls'
  | 'xlsx';

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['Json']['output']>;
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

/** An object with an ID */
export type Entity = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export type EntityTypeName =
  /** Asset system model */
  | 'Asset'
  | 'Cart'
  | 'CartItem'
  | 'Category'
  | 'Collection'
  | 'Order'
  | 'Product'
  | 'ProductImage'
  | 'Review'
  /** Scheduled Operation system model */
  | 'ScheduledOperation'
  /** Scheduled Release system model */
  | 'ScheduledRelease'
  /** User system model */
  | 'User';

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
  /** The ID of an object */
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Locale>;
  stage: Stage;
  /** The Type name of an object */
  typename: EntityTypeName;
};

export type ImageFit =
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  | 'clip'
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  | 'crop'
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  | 'max'
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  | 'scale';

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export type Locale =
  /** System locale */
  | 'en';

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  distance: Scalars['Float']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type Mutation = {
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one cart */
  createCart?: Maybe<Cart>;
  /** Create one cartItem */
  createCartItem?: Maybe<CartItem>;
  /** Create one category */
  createCategory?: Maybe<Category>;
  /** Create one collection */
  createCollection?: Maybe<Collection>;
  /** Create one order */
  createOrder?: Maybe<Order>;
  /** Create one product */
  createProduct?: Maybe<Product>;
  /** Create one productImage */
  createProductImage?: Maybe<ProductImage>;
  /** Create one review */
  createReview?: Maybe<Review>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one cart from _all_ existing stages. Returns deleted document. */
  deleteCart?: Maybe<Cart>;
  /** Delete one cartItem from _all_ existing stages. Returns deleted document. */
  deleteCartItem?: Maybe<CartItem>;
  /** Delete one category from _all_ existing stages. Returns deleted document. */
  deleteCategory?: Maybe<Category>;
  /** Delete one collection from _all_ existing stages. Returns deleted document. */
  deleteCollection?: Maybe<Collection>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many CartItem documents
   * @deprecated Please use the new paginated many mutation (deleteManyCartItemsConnection)
   */
  deleteManyCartItems: BatchPayload;
  /** Delete many CartItem documents, return deleted documents */
  deleteManyCartItemsConnection: CartItemConnection;
  /**
   * Delete many Cart documents
   * @deprecated Please use the new paginated many mutation (deleteManyCartsConnection)
   */
  deleteManyCarts: BatchPayload;
  /** Delete many Cart documents, return deleted documents */
  deleteManyCartsConnection: CartConnection;
  /**
   * Delete many Category documents
   * @deprecated Please use the new paginated many mutation (deleteManyCategoriesConnection)
   */
  deleteManyCategories: BatchPayload;
  /** Delete many Category documents, return deleted documents */
  deleteManyCategoriesConnection: CategoryConnection;
  /**
   * Delete many Collection documents
   * @deprecated Please use the new paginated many mutation (deleteManyCollectionsConnection)
   */
  deleteManyCollections: BatchPayload;
  /** Delete many Collection documents, return deleted documents */
  deleteManyCollectionsConnection: CollectionConnection;
  /**
   * Delete many Order documents
   * @deprecated Please use the new paginated many mutation (deleteManyOrdersConnection)
   */
  deleteManyOrders: BatchPayload;
  /** Delete many Order documents, return deleted documents */
  deleteManyOrdersConnection: OrderConnection;
  /**
   * Delete many ProductImage documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductImagesConnection)
   */
  deleteManyProductImages: BatchPayload;
  /** Delete many ProductImage documents, return deleted documents */
  deleteManyProductImagesConnection: ProductImageConnection;
  /**
   * Delete many Product documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductsConnection)
   */
  deleteManyProducts: BatchPayload;
  /** Delete many Product documents, return deleted documents */
  deleteManyProductsConnection: ProductConnection;
  /**
   * Delete many Review documents
   * @deprecated Please use the new paginated many mutation (deleteManyReviewsConnection)
   */
  deleteManyReviews: BatchPayload;
  /** Delete many Review documents, return deleted documents */
  deleteManyReviewsConnection: ReviewConnection;
  /** Delete one order from _all_ existing stages. Returns deleted document. */
  deleteOrder?: Maybe<Order>;
  /** Delete one product from _all_ existing stages. Returns deleted document. */
  deleteProduct?: Maybe<Product>;
  /** Delete one productImage from _all_ existing stages. Returns deleted document. */
  deleteProductImage?: Maybe<ProductImage>;
  /** Delete one review from _all_ existing stages. Returns deleted document. */
  deleteReview?: Maybe<Review>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one cart */
  publishCart?: Maybe<Cart>;
  /** Publish one cartItem */
  publishCartItem?: Maybe<CartItem>;
  /** Publish one category */
  publishCategory?: Maybe<Category>;
  /** Publish one collection */
  publishCollection?: Maybe<Collection>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many CartItem documents
   * @deprecated Please use the new paginated many mutation (publishManyCartItemsConnection)
   */
  publishManyCartItems: BatchPayload;
  /** Publish many CartItem documents */
  publishManyCartItemsConnection: CartItemConnection;
  /**
   * Publish many Cart documents
   * @deprecated Please use the new paginated many mutation (publishManyCartsConnection)
   */
  publishManyCarts: BatchPayload;
  /** Publish many Cart documents */
  publishManyCartsConnection: CartConnection;
  /**
   * Publish many Category documents
   * @deprecated Please use the new paginated many mutation (publishManyCategoriesConnection)
   */
  publishManyCategories: BatchPayload;
  /** Publish many Category documents */
  publishManyCategoriesConnection: CategoryConnection;
  /**
   * Publish many Collection documents
   * @deprecated Please use the new paginated many mutation (publishManyCollectionsConnection)
   */
  publishManyCollections: BatchPayload;
  /** Publish many Collection documents */
  publishManyCollectionsConnection: CollectionConnection;
  /**
   * Publish many Order documents
   * @deprecated Please use the new paginated many mutation (publishManyOrdersConnection)
   */
  publishManyOrders: BatchPayload;
  /** Publish many Order documents */
  publishManyOrdersConnection: OrderConnection;
  /**
   * Publish many ProductImage documents
   * @deprecated Please use the new paginated many mutation (publishManyProductImagesConnection)
   */
  publishManyProductImages: BatchPayload;
  /** Publish many ProductImage documents */
  publishManyProductImagesConnection: ProductImageConnection;
  /**
   * Publish many Product documents
   * @deprecated Please use the new paginated many mutation (publishManyProductsConnection)
   */
  publishManyProducts: BatchPayload;
  /** Publish many Product documents */
  publishManyProductsConnection: ProductConnection;
  /**
   * Publish many Review documents
   * @deprecated Please use the new paginated many mutation (publishManyReviewsConnection)
   */
  publishManyReviews: BatchPayload;
  /** Publish many Review documents */
  publishManyReviewsConnection: ReviewConnection;
  /** Publish one order */
  publishOrder?: Maybe<Order>;
  /** Publish one product */
  publishProduct?: Maybe<Product>;
  /** Publish one productImage */
  publishProductImage?: Maybe<ProductImage>;
  /** Publish one review */
  publishReview?: Maybe<Review>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one cart */
  schedulePublishCart?: Maybe<Cart>;
  /** Schedule to publish one cartItem */
  schedulePublishCartItem?: Maybe<CartItem>;
  /** Schedule to publish one category */
  schedulePublishCategory?: Maybe<Category>;
  /** Schedule to publish one collection */
  schedulePublishCollection?: Maybe<Collection>;
  /** Schedule to publish one order */
  schedulePublishOrder?: Maybe<Order>;
  /** Schedule to publish one product */
  schedulePublishProduct?: Maybe<Product>;
  /** Schedule to publish one productImage */
  schedulePublishProductImage?: Maybe<ProductImage>;
  /** Schedule to publish one review */
  schedulePublishReview?: Maybe<Review>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one cart from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCart?: Maybe<Cart>;
  /** Unpublish one cartItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCartItem?: Maybe<CartItem>;
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCategory?: Maybe<Category>;
  /** Unpublish one collection from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCollection?: Maybe<Collection>;
  /** Unpublish one order from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishOrder?: Maybe<Order>;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProduct?: Maybe<Product>;
  /** Unpublish one productImage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProductImage?: Maybe<ProductImage>;
  /** Unpublish one review from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishReview?: Maybe<Review>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one cart from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCart?: Maybe<Cart>;
  /** Unpublish one cartItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCartItem?: Maybe<CartItem>;
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCategory?: Maybe<Category>;
  /** Unpublish one collection from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCollection?: Maybe<Collection>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many CartItem documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCartItemsConnection)
   */
  unpublishManyCartItems: BatchPayload;
  /** Find many CartItem documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCartItemsConnection: CartItemConnection;
  /**
   * Unpublish many Cart documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCartsConnection)
   */
  unpublishManyCarts: BatchPayload;
  /** Find many Cart documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCartsConnection: CartConnection;
  /**
   * Unpublish many Category documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCategoriesConnection)
   */
  unpublishManyCategories: BatchPayload;
  /** Find many Category documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCategoriesConnection: CategoryConnection;
  /**
   * Unpublish many Collection documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCollectionsConnection)
   */
  unpublishManyCollections: BatchPayload;
  /** Find many Collection documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCollectionsConnection: CollectionConnection;
  /**
   * Unpublish many Order documents
   * @deprecated Please use the new paginated many mutation (unpublishManyOrdersConnection)
   */
  unpublishManyOrders: BatchPayload;
  /** Find many Order documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyOrdersConnection: OrderConnection;
  /**
   * Unpublish many ProductImage documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductImagesConnection)
   */
  unpublishManyProductImages: BatchPayload;
  /** Find many ProductImage documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProductImagesConnection: ProductImageConnection;
  /**
   * Unpublish many Product documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductsConnection)
   */
  unpublishManyProducts: BatchPayload;
  /** Find many Product documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProductsConnection: ProductConnection;
  /**
   * Unpublish many Review documents
   * @deprecated Please use the new paginated many mutation (unpublishManyReviewsConnection)
   */
  unpublishManyReviews: BatchPayload;
  /** Find many Review documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyReviewsConnection: ReviewConnection;
  /** Unpublish one order from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishOrder?: Maybe<Order>;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProduct?: Maybe<Product>;
  /** Unpublish one productImage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProductImage?: Maybe<ProductImage>;
  /** Unpublish one review from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishReview?: Maybe<Review>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one cart */
  updateCart?: Maybe<Cart>;
  /** Update one cartItem */
  updateCartItem?: Maybe<CartItem>;
  /** Update one category */
  updateCategory?: Maybe<Category>;
  /** Update one collection */
  updateCollection?: Maybe<Collection>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many cartItems
   * @deprecated Please use the new paginated many mutation (updateManyCartItemsConnection)
   */
  updateManyCartItems: BatchPayload;
  /** Update many CartItem documents */
  updateManyCartItemsConnection: CartItemConnection;
  /**
   * Update many carts
   * @deprecated Please use the new paginated many mutation (updateManyCartsConnection)
   */
  updateManyCarts: BatchPayload;
  /** Update many Cart documents */
  updateManyCartsConnection: CartConnection;
  /**
   * Update many categories
   * @deprecated Please use the new paginated many mutation (updateManyCategoriesConnection)
   */
  updateManyCategories: BatchPayload;
  /** Update many Category documents */
  updateManyCategoriesConnection: CategoryConnection;
  /**
   * Update many collections
   * @deprecated Please use the new paginated many mutation (updateManyCollectionsConnection)
   */
  updateManyCollections: BatchPayload;
  /** Update many Collection documents */
  updateManyCollectionsConnection: CollectionConnection;
  /**
   * Update many orders
   * @deprecated Please use the new paginated many mutation (updateManyOrdersConnection)
   */
  updateManyOrders: BatchPayload;
  /** Update many Order documents */
  updateManyOrdersConnection: OrderConnection;
  /**
   * Update many productImages
   * @deprecated Please use the new paginated many mutation (updateManyProductImagesConnection)
   */
  updateManyProductImages: BatchPayload;
  /** Update many ProductImage documents */
  updateManyProductImagesConnection: ProductImageConnection;
  /**
   * Update many products
   * @deprecated Please use the new paginated many mutation (updateManyProductsConnection)
   */
  updateManyProducts: BatchPayload;
  /** Update many Product documents */
  updateManyProductsConnection: ProductConnection;
  /**
   * Update many reviews
   * @deprecated Please use the new paginated many mutation (updateManyReviewsConnection)
   */
  updateManyReviews: BatchPayload;
  /** Update many Review documents */
  updateManyReviewsConnection: ReviewConnection;
  /** Update one order */
  updateOrder?: Maybe<Order>;
  /** Update one product */
  updateProduct?: Maybe<Product>;
  /** Update one productImage */
  updateProductImage?: Maybe<ProductImage>;
  /** Update one review */
  updateReview?: Maybe<Review>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one cart */
  upsertCart?: Maybe<Cart>;
  /** Upsert one cartItem */
  upsertCartItem?: Maybe<CartItem>;
  /** Upsert one category */
  upsertCategory?: Maybe<Category>;
  /** Upsert one collection */
  upsertCollection?: Maybe<Collection>;
  /** Upsert one order */
  upsertOrder?: Maybe<Order>;
  /** Upsert one product */
  upsertProduct?: Maybe<Product>;
  /** Upsert one productImage */
  upsertProductImage?: Maybe<ProductImage>;
  /** Upsert one review */
  upsertReview?: Maybe<Review>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateCartArgs = {
  data: CartCreateInput;
};


export type MutationCreateCartItemArgs = {
  data: CartItemCreateInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateCollectionArgs = {
  data: CollectionCreateInput;
};


export type MutationCreateOrderArgs = {
  data: OrderCreateInput;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateProductImageArgs = {
  data: ProductImageCreateInput;
};


export type MutationCreateReviewArgs = {
  data: ReviewCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteCartArgs = {
  where: CartWhereUniqueInput;
};


export type MutationDeleteCartItemArgs = {
  where: CartItemWhereUniqueInput;
};


export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteCollectionArgs = {
  where: CollectionWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyCartItemsArgs = {
  where?: InputMaybe<CartItemManyWhereInput>;
};


export type MutationDeleteManyCartItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CartItemManyWhereInput>;
};


export type MutationDeleteManyCartsArgs = {
  where?: InputMaybe<CartManyWhereInput>;
};


export type MutationDeleteManyCartsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CartManyWhereInput>;
};


export type MutationDeleteManyCategoriesArgs = {
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationDeleteManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationDeleteManyCollectionsArgs = {
  where?: InputMaybe<CollectionManyWhereInput>;
};


export type MutationDeleteManyCollectionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CollectionManyWhereInput>;
};


export type MutationDeleteManyOrdersArgs = {
  where?: InputMaybe<OrderManyWhereInput>;
};


export type MutationDeleteManyOrdersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderManyWhereInput>;
};


export type MutationDeleteManyProductImagesArgs = {
  where?: InputMaybe<ProductImageManyWhereInput>;
};


export type MutationDeleteManyProductImagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductImageManyWhereInput>;
};


export type MutationDeleteManyProductsArgs = {
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationDeleteManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationDeleteManyReviewsArgs = {
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationDeleteManyReviewsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationDeleteOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteProductImageArgs = {
  where: ProductImageWhereUniqueInput;
};


export type MutationDeleteReviewArgs = {
  where: ReviewWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishCartArgs = {
  to?: Array<Stage>;
  where: CartWhereUniqueInput;
};


export type MutationPublishCartItemArgs = {
  to?: Array<Stage>;
  where: CartItemWhereUniqueInput;
};


export type MutationPublishCategoryArgs = {
  to?: Array<Stage>;
  where: CategoryWhereUniqueInput;
};


export type MutationPublishCollectionArgs = {
  to?: Array<Stage>;
  where: CollectionWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyCartItemsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CartItemManyWhereInput>;
};


export type MutationPublishManyCartItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<CartItemManyWhereInput>;
};


export type MutationPublishManyCartsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CartManyWhereInput>;
};


export type MutationPublishManyCartsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<CartManyWhereInput>;
};


export type MutationPublishManyCategoriesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationPublishManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationPublishManyCollectionsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CollectionManyWhereInput>;
};


export type MutationPublishManyCollectionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<CollectionManyWhereInput>;
};


export type MutationPublishManyOrdersArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<OrderManyWhereInput>;
};


export type MutationPublishManyOrdersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<OrderManyWhereInput>;
};


export type MutationPublishManyProductImagesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ProductImageManyWhereInput>;
};


export type MutationPublishManyProductImagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ProductImageManyWhereInput>;
};


export type MutationPublishManyProductsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationPublishManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationPublishManyReviewsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationPublishManyReviewsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationPublishOrderArgs = {
  to?: Array<Stage>;
  where: OrderWhereUniqueInput;
};


export type MutationPublishProductArgs = {
  to?: Array<Stage>;
  where: ProductWhereUniqueInput;
};


export type MutationPublishProductImageArgs = {
  to?: Array<Stage>;
  where: ProductImageWhereUniqueInput;
};


export type MutationPublishReviewArgs = {
  to?: Array<Stage>;
  where: ReviewWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishCartArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: CartWhereUniqueInput;
};


export type MutationSchedulePublishCartItemArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: CartItemWhereUniqueInput;
};


export type MutationSchedulePublishCategoryArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: CategoryWhereUniqueInput;
};


export type MutationSchedulePublishCollectionArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: CollectionWhereUniqueInput;
};


export type MutationSchedulePublishOrderArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: OrderWhereUniqueInput;
};


export type MutationSchedulePublishProductArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: ProductWhereUniqueInput;
};


export type MutationSchedulePublishProductImageArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: ProductImageWhereUniqueInput;
};


export type MutationSchedulePublishReviewArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: ReviewWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishCartArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: CartWhereUniqueInput;
};


export type MutationScheduleUnpublishCartItemArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: CartItemWhereUniqueInput;
};


export type MutationScheduleUnpublishCategoryArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: CategoryWhereUniqueInput;
};


export type MutationScheduleUnpublishCollectionArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: CollectionWhereUniqueInput;
};


export type MutationScheduleUnpublishOrderArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: OrderWhereUniqueInput;
};


export type MutationScheduleUnpublishProductArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: ProductWhereUniqueInput;
};


export type MutationScheduleUnpublishProductImageArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: ProductImageWhereUniqueInput;
};


export type MutationScheduleUnpublishReviewArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: ReviewWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishCartArgs = {
  from?: Array<Stage>;
  where: CartWhereUniqueInput;
};


export type MutationUnpublishCartItemArgs = {
  from?: Array<Stage>;
  where: CartItemWhereUniqueInput;
};


export type MutationUnpublishCategoryArgs = {
  from?: Array<Stage>;
  where: CategoryWhereUniqueInput;
};


export type MutationUnpublishCollectionArgs = {
  from?: Array<Stage>;
  where: CollectionWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyCartItemsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CartItemManyWhereInput>;
};


export type MutationUnpublishManyCartItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CartItemManyWhereInput>;
};


export type MutationUnpublishManyCartsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CartManyWhereInput>;
};


export type MutationUnpublishManyCartsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CartManyWhereInput>;
};


export type MutationUnpublishManyCategoriesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationUnpublishManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationUnpublishManyCollectionsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CollectionManyWhereInput>;
};


export type MutationUnpublishManyCollectionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CollectionManyWhereInput>;
};


export type MutationUnpublishManyOrdersArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<OrderManyWhereInput>;
};


export type MutationUnpublishManyOrdersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<OrderManyWhereInput>;
};


export type MutationUnpublishManyProductImagesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ProductImageManyWhereInput>;
};


export type MutationUnpublishManyProductImagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ProductImageManyWhereInput>;
};


export type MutationUnpublishManyProductsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationUnpublishManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationUnpublishManyReviewsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationUnpublishManyReviewsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationUnpublishOrderArgs = {
  from?: Array<Stage>;
  where: OrderWhereUniqueInput;
};


export type MutationUnpublishProductArgs = {
  from?: Array<Stage>;
  where: ProductWhereUniqueInput;
};


export type MutationUnpublishProductImageArgs = {
  from?: Array<Stage>;
  where: ProductImageWhereUniqueInput;
};


export type MutationUnpublishReviewArgs = {
  from?: Array<Stage>;
  where: ReviewWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateCartArgs = {
  data: CartUpdateInput;
  where: CartWhereUniqueInput;
};


export type MutationUpdateCartItemArgs = {
  data: CartItemUpdateInput;
  where: CartItemWhereUniqueInput;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateCollectionArgs = {
  data: CollectionUpdateInput;
  where: CollectionWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyCartItemsArgs = {
  data: CartItemUpdateManyInput;
  where?: InputMaybe<CartItemManyWhereInput>;
};


export type MutationUpdateManyCartItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: CartItemUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CartItemManyWhereInput>;
};


export type MutationUpdateManyCartsArgs = {
  data: CartUpdateManyInput;
  where?: InputMaybe<CartManyWhereInput>;
};


export type MutationUpdateManyCartsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: CartUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CartManyWhereInput>;
};


export type MutationUpdateManyCategoriesArgs = {
  data: CategoryUpdateManyInput;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationUpdateManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: CategoryUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationUpdateManyCollectionsArgs = {
  data: CollectionUpdateManyInput;
  where?: InputMaybe<CollectionManyWhereInput>;
};


export type MutationUpdateManyCollectionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: CollectionUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CollectionManyWhereInput>;
};


export type MutationUpdateManyOrdersArgs = {
  data: OrderUpdateManyInput;
  where?: InputMaybe<OrderManyWhereInput>;
};


export type MutationUpdateManyOrdersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: OrderUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderManyWhereInput>;
};


export type MutationUpdateManyProductImagesArgs = {
  data: ProductImageUpdateManyInput;
  where?: InputMaybe<ProductImageManyWhereInput>;
};


export type MutationUpdateManyProductImagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: ProductImageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductImageManyWhereInput>;
};


export type MutationUpdateManyProductsArgs = {
  data: ProductUpdateManyInput;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationUpdateManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: ProductUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationUpdateManyReviewsArgs = {
  data: ReviewUpdateManyInput;
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationUpdateManyReviewsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: ReviewUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationUpdateOrderArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};


export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateProductImageArgs = {
  data: ProductImageUpdateInput;
  where: ProductImageWhereUniqueInput;
};


export type MutationUpdateReviewArgs = {
  data: ReviewUpdateInput;
  where: ReviewWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertCartArgs = {
  upsert: CartUpsertInput;
  where: CartWhereUniqueInput;
};


export type MutationUpsertCartItemArgs = {
  upsert: CartItemUpsertInput;
  where: CartItemWhereUniqueInput;
};


export type MutationUpsertCategoryArgs = {
  upsert: CategoryUpsertInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpsertCollectionArgs = {
  upsert: CollectionUpsertInput;
  where: CollectionWhereUniqueInput;
};


export type MutationUpsertOrderArgs = {
  upsert: OrderUpsertInput;
  where: OrderWhereUniqueInput;
};


export type MutationUpsertProductArgs = {
  upsert: ProductUpsertInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpsertProductImageArgs = {
  upsert: ProductImageUpsertInput;
  where: ProductImageWhereUniqueInput;
};


export type MutationUpsertReviewArgs = {
  upsert: ReviewUpsertInput;
  where: ReviewWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

export type Order = Entity & Node & {
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Order>;
  /** List of Order versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  lines?: Maybe<Scalars['Json']['output']>;
  orderStatus?: Maybe<OrderStatus>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  totalAmount?: Maybe<Scalars['Int']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type OrderCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type OrderDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type OrderHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type OrderPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type OrderScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type OrderUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type OrderConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: OrderWhereUniqueInput;
};

/** A connection to a list of items. */
export type OrderConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<OrderEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type OrderCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  lines?: InputMaybe<Scalars['Json']['input']>;
  orderStatus?: InputMaybe<OrderStatus>;
  totalAmount?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderCreateManyInlineInput = {
  /** Connect multiple existing Order documents */
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  /** Create and connect multiple existing Order documents */
  create?: InputMaybe<Array<OrderCreateInput>>;
};

export type OrderCreateOneInlineInput = {
  /** Connect one existing Order document */
  connect?: InputMaybe<OrderWhereUniqueInput>;
  /** Create and connect one Order document */
  create?: InputMaybe<OrderCreateInput>;
};

/** An edge in a connection. */
export type OrderEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Order;
};

/** Identifies documents */
export type OrderManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrderWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<OrderWhereStageInput>;
  documentInStages_none?: InputMaybe<OrderWhereStageInput>;
  documentInStages_some?: InputMaybe<OrderWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given json path. */
  lines_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  lines_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  orderStatus?: InputMaybe<OrderStatus>;
  /** All values that are contained in given list. */
  orderStatus_in?: InputMaybe<Array<InputMaybe<OrderStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  orderStatus_not?: InputMaybe<OrderStatus>;
  /** All values that are not contained in given list. */
  orderStatus_not_in?: InputMaybe<Array<InputMaybe<OrderStatus>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  totalAmount?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  totalAmount_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  totalAmount_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  totalAmount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  totalAmount_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  totalAmount_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  totalAmount_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  totalAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type OrderOrderByInput =
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'orderStatus_ASC'
  | 'orderStatus_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'totalAmount_ASC'
  | 'totalAmount_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type OrderStatus =
  | 'CANCELLED'
  | 'CREATED'
  | 'FULFILLED'
  | 'PAID';

export type OrderUpdateInput = {
  lines?: InputMaybe<Scalars['Json']['input']>;
  orderStatus?: InputMaybe<OrderStatus>;
  totalAmount?: InputMaybe<Scalars['Int']['input']>;
};

export type OrderUpdateManyInlineInput = {
  /** Connect multiple existing Order documents */
  connect?: InputMaybe<Array<OrderConnectInput>>;
  /** Create and connect multiple Order documents */
  create?: InputMaybe<Array<OrderCreateInput>>;
  /** Delete multiple Order documents */
  delete?: InputMaybe<Array<OrderWhereUniqueInput>>;
  /** Disconnect multiple Order documents */
  disconnect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Order documents */
  set?: InputMaybe<Array<OrderWhereUniqueInput>>;
  /** Update multiple Order documents */
  update?: InputMaybe<Array<OrderUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Order documents */
  upsert?: InputMaybe<Array<OrderUpsertWithNestedWhereUniqueInput>>;
};

export type OrderUpdateManyInput = {
  lines?: InputMaybe<Scalars['Json']['input']>;
  orderStatus?: InputMaybe<OrderStatus>;
  totalAmount?: InputMaybe<Scalars['Int']['input']>;
};

export type OrderUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: OrderUpdateManyInput;
  /** Document search */
  where: OrderWhereInput;
};

export type OrderUpdateOneInlineInput = {
  /** Connect existing Order document */
  connect?: InputMaybe<OrderWhereUniqueInput>;
  /** Create and connect one Order document */
  create?: InputMaybe<OrderCreateInput>;
  /** Delete currently connected Order document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Order document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Order document */
  update?: InputMaybe<OrderUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Order document */
  upsert?: InputMaybe<OrderUpsertWithNestedWhereUniqueInput>;
};

export type OrderUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: OrderUpdateInput;
  /** Unique document search */
  where: OrderWhereUniqueInput;
};

export type OrderUpsertInput = {
  /** Create document if it didn't exist */
  create: OrderCreateInput;
  /** Update document if it exists */
  update: OrderUpdateInput;
};

export type OrderUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: OrderUpsertInput;
  /** Unique document search */
  where: OrderWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type OrderWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type OrderWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrderWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<OrderWhereStageInput>;
  documentInStages_none?: InputMaybe<OrderWhereStageInput>;
  documentInStages_some?: InputMaybe<OrderWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given json path. */
  lines_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  lines_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  orderStatus?: InputMaybe<OrderStatus>;
  /** All values that are contained in given list. */
  orderStatus_in?: InputMaybe<Array<InputMaybe<OrderStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  orderStatus_not?: InputMaybe<OrderStatus>;
  /** All values that are not contained in given list. */
  orderStatus_not_in?: InputMaybe<Array<InputMaybe<OrderStatus>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  totalAmount?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  totalAmount_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  totalAmount_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  totalAmount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  totalAmount_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  totalAmount_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  totalAmount_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  totalAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type OrderWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrderWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrderWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrderWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<OrderWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Order record uniquely */
export type OrderWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Product = Entity & Node & {
  categories: Array<Category>;
  collections: Array<Collection>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description: Scalars['String']['output'];
  /** Get the document in other stages */
  documentInStages: Array<Product>;
  /** List of Product versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  images: Array<ProductImage>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  rating: Scalars['Float']['output'];
  reviews: Array<Review>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ProductCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type ProductCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CollectionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CollectionWhereInput>;
};


export type ProductCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProductDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type ProductHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type ProductImagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductImageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductImageWhereInput>;
};


export type ProductPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProductReviewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ReviewOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReviewWhereInput>;
};


export type ProductScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ProductUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductCreateInput = {
  categories?: InputMaybe<CategoryCreateManyInlineInput>;
  clt7neutw1yag07vz7ajd02eb?: InputMaybe<ReviewCreateManyInlineInput>;
  clt7nizej1yg607vzcm65699y?: InputMaybe<CartItemCreateManyInlineInput>;
  collections?: InputMaybe<CollectionCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  images?: InputMaybe<ProductImageCreateManyInlineInput>;
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  rating: Scalars['Float']['input'];
  reviews?: InputMaybe<ReviewCreateManyInlineInput>;
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateManyInlineInput = {
  /** Connect multiple existing Product documents */
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Create and connect multiple existing Product documents */
  create?: InputMaybe<Array<ProductCreateInput>>;
};

export type ProductCreateOneInlineInput = {
  /** Connect one existing Product document */
  connect?: InputMaybe<ProductWhereUniqueInput>;
  /** Create and connect one Product document */
  create?: InputMaybe<ProductCreateInput>;
};

/** An edge in a connection. */
export type ProductEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Product;
};

export type ProductImage = Entity & Node & {
  alt: Scalars['String']['output'];
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<ProductImage>;
  height: Scalars['Int']['output'];
  /** List of ProductImage versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};


export type ProductImageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProductImageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type ProductImageHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type ProductImagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ProductImageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ProductImageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductImageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductImageWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductImageConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductImageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductImageCreateInput = {
  alt: Scalars['String']['input'];
  clt7naaxy1y3j07vz0j8x03an?: InputMaybe<ProductCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  height: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  url: Scalars['String']['input'];
  width: Scalars['Int']['input'];
};

export type ProductImageCreateManyInlineInput = {
  /** Connect multiple existing ProductImage documents */
  connect?: InputMaybe<Array<ProductImageWhereUniqueInput>>;
  /** Create and connect multiple existing ProductImage documents */
  create?: InputMaybe<Array<ProductImageCreateInput>>;
};

export type ProductImageCreateOneInlineInput = {
  /** Connect one existing ProductImage document */
  connect?: InputMaybe<ProductImageWhereUniqueInput>;
  /** Create and connect one ProductImage document */
  create?: InputMaybe<ProductImageCreateInput>;
};

/** An edge in a connection. */
export type ProductImageEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductImage;
};

/** Identifies documents */
export type ProductImageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductImageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductImageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductImageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  alt?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  alt_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  alt_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  alt_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  alt_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  alt_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  alt_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  alt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  alt_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  alt_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ProductImageWhereStageInput>;
  documentInStages_none?: InputMaybe<ProductImageWhereStageInput>;
  documentInStages_some?: InputMaybe<ProductImageWhereStageInput>;
  height?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type ProductImageOrderByInput =
  | 'alt_ASC'
  | 'alt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'height_ASC'
  | 'height_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'url_ASC'
  | 'url_DESC'
  | 'width_ASC'
  | 'width_DESC';

export type ProductImageUpdateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  clt7naaxy1y3j07vz0j8x03an?: InputMaybe<ProductUpdateManyInlineInput>;
  height?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductImageUpdateManyInlineInput = {
  /** Connect multiple existing ProductImage documents */
  connect?: InputMaybe<Array<ProductImageConnectInput>>;
  /** Create and connect multiple ProductImage documents */
  create?: InputMaybe<Array<ProductImageCreateInput>>;
  /** Delete multiple ProductImage documents */
  delete?: InputMaybe<Array<ProductImageWhereUniqueInput>>;
  /** Disconnect multiple ProductImage documents */
  disconnect?: InputMaybe<Array<ProductImageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ProductImage documents */
  set?: InputMaybe<Array<ProductImageWhereUniqueInput>>;
  /** Update multiple ProductImage documents */
  update?: InputMaybe<Array<ProductImageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ProductImage documents */
  upsert?: InputMaybe<Array<ProductImageUpsertWithNestedWhereUniqueInput>>;
};

export type ProductImageUpdateManyInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductImageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductImageUpdateManyInput;
  /** Document search */
  where: ProductImageWhereInput;
};

export type ProductImageUpdateOneInlineInput = {
  /** Connect existing ProductImage document */
  connect?: InputMaybe<ProductImageWhereUniqueInput>;
  /** Create and connect one ProductImage document */
  create?: InputMaybe<ProductImageCreateInput>;
  /** Delete currently connected ProductImage document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ProductImage document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ProductImage document */
  update?: InputMaybe<ProductImageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductImage document */
  upsert?: InputMaybe<ProductImageUpsertWithNestedWhereUniqueInput>;
};

export type ProductImageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductImageUpdateInput;
  /** Unique document search */
  where: ProductImageWhereUniqueInput;
};

export type ProductImageUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductImageCreateInput;
  /** Update document if it exists */
  update: ProductImageUpdateInput;
};

export type ProductImageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductImageUpsertInput;
  /** Unique document search */
  where: ProductImageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProductImageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ProductImageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductImageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductImageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductImageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  alt?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  alt_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  alt_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  alt_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  alt_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  alt_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  alt_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  alt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  alt_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  alt_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ProductImageWhereStageInput>;
  documentInStages_none?: InputMaybe<ProductImageWhereStageInput>;
  documentInStages_some?: InputMaybe<ProductImageWhereStageInput>;
  height?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  url?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProductImageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductImageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductImageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductImageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProductImageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References ProductImage record uniquely */
export type ProductImageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Identifies documents */
export type ProductManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  categories_every?: InputMaybe<CategoryWhereInput>;
  categories_none?: InputMaybe<CategoryWhereInput>;
  categories_some?: InputMaybe<CategoryWhereInput>;
  collections_every?: InputMaybe<CollectionWhereInput>;
  collections_none?: InputMaybe<CollectionWhereInput>;
  collections_some?: InputMaybe<CollectionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<ProductWhereStageInput>;
  documentInStages_none?: InputMaybe<ProductWhereStageInput>;
  documentInStages_some?: InputMaybe<ProductWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  images_every?: InputMaybe<ProductImageWhereInput>;
  images_none?: InputMaybe<ProductImageWhereInput>;
  images_some?: InputMaybe<ProductImageWhereInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  price_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  rating_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  rating_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  rating_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  rating_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  rating_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  rating_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  rating_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  reviews_every?: InputMaybe<ReviewWhereInput>;
  reviews_none?: InputMaybe<ReviewWhereInput>;
  reviews_some?: InputMaybe<ReviewWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type ProductOrderByInput =
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'price_ASC'
  | 'price_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'rating_ASC'
  | 'rating_DESC'
  | 'slug_ASC'
  | 'slug_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type ProductUpdateInput = {
  categories?: InputMaybe<CategoryUpdateManyInlineInput>;
  clt7neutw1yag07vz7ajd02eb?: InputMaybe<ReviewUpdateManyInlineInput>;
  clt7nizej1yg607vzcm65699y?: InputMaybe<CartItemUpdateManyInlineInput>;
  collections?: InputMaybe<CollectionUpdateManyInlineInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductImageUpdateManyInlineInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  reviews?: InputMaybe<ReviewUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ProductUpdateManyInlineInput = {
  /** Connect multiple existing Product documents */
  connect?: InputMaybe<Array<ProductConnectInput>>;
  /** Create and connect multiple Product documents */
  create?: InputMaybe<Array<ProductCreateInput>>;
  /** Delete multiple Product documents */
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Disconnect multiple Product documents */
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Product documents */
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Update multiple Product documents */
  update?: InputMaybe<Array<ProductUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Product documents */
  upsert?: InputMaybe<Array<ProductUpsertWithNestedWhereUniqueInput>>;
};

export type ProductUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
};

export type ProductUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductUpdateManyInput;
  /** Document search */
  where: ProductWhereInput;
};

export type ProductUpdateOneInlineInput = {
  /** Connect existing Product document */
  connect?: InputMaybe<ProductWhereUniqueInput>;
  /** Create and connect one Product document */
  create?: InputMaybe<ProductCreateInput>;
  /** Delete currently connected Product document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Product document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Product document */
  update?: InputMaybe<ProductUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Product document */
  upsert?: InputMaybe<ProductUpsertWithNestedWhereUniqueInput>;
};

export type ProductUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductUpdateInput;
  /** Unique document search */
  where: ProductWhereUniqueInput;
};

export type ProductUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductCreateInput;
  /** Update document if it exists */
  update: ProductUpdateInput;
};

export type ProductUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductUpsertInput;
  /** Unique document search */
  where: ProductWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProductWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ProductWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  categories_every?: InputMaybe<CategoryWhereInput>;
  categories_none?: InputMaybe<CategoryWhereInput>;
  categories_some?: InputMaybe<CategoryWhereInput>;
  collections_every?: InputMaybe<CollectionWhereInput>;
  collections_none?: InputMaybe<CollectionWhereInput>;
  collections_some?: InputMaybe<CollectionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<ProductWhereStageInput>;
  documentInStages_none?: InputMaybe<ProductWhereStageInput>;
  documentInStages_some?: InputMaybe<ProductWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  images_every?: InputMaybe<ProductImageWhereInput>;
  images_none?: InputMaybe<ProductImageWhereInput>;
  images_some?: InputMaybe<ProductImageWhereInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  price_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  rating_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  rating_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  rating_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  rating_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  rating_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  rating_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  rating_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  reviews_every?: InputMaybe<ReviewWhereInput>;
  reviews_none?: InputMaybe<ReviewWhereInput>;
  reviews_some?: InputMaybe<ReviewWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProductWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProductWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Product record uniquely */
export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single cart */
  cart?: Maybe<Cart>;
  /** Retrieve a single cartItem */
  cartItem?: Maybe<CartItem>;
  /** Retrieve document version */
  cartItemVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple cartItems */
  cartItems: Array<CartItem>;
  /** Retrieve multiple cartItems using the Relay connection interface */
  cartItemsConnection: CartItemConnection;
  /** Retrieve document version */
  cartVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple carts */
  carts: Array<Cart>;
  /** Retrieve multiple carts using the Relay connection interface */
  cartsConnection: CartConnection;
  /** Retrieve multiple categories */
  categories: Array<Category>;
  /** Retrieve multiple categories using the Relay connection interface */
  categoriesConnection: CategoryConnection;
  /** Retrieve a single category */
  category?: Maybe<Category>;
  /** Retrieve document version */
  categoryVersion?: Maybe<DocumentVersion>;
  /** Retrieve a single collection */
  collection?: Maybe<Collection>;
  /** Retrieve document version */
  collectionVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple collections */
  collections: Array<Collection>;
  /** Retrieve multiple collections using the Relay connection interface */
  collectionsConnection: CollectionConnection;
  /** Fetches an object given its ID */
  entities?: Maybe<Array<Entity>>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single order */
  order?: Maybe<Order>;
  /** Retrieve document version */
  orderVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple orders */
  orders: Array<Order>;
  /** Retrieve multiple orders using the Relay connection interface */
  ordersConnection: OrderConnection;
  /** Retrieve a single product */
  product?: Maybe<Product>;
  /** Retrieve a single productImage */
  productImage?: Maybe<ProductImage>;
  /** Retrieve document version */
  productImageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple productImages */
  productImages: Array<ProductImage>;
  /** Retrieve multiple productImages using the Relay connection interface */
  productImagesConnection: ProductImageConnection;
  /** Retrieve document version */
  productVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple products */
  products: Array<Product>;
  /** Retrieve multiple products using the Relay connection interface */
  productsConnection: ProductConnection;
  /** Retrieve a single review */
  review?: Maybe<Review>;
  /** Retrieve document version */
  reviewVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple reviews */
  reviews: Array<Review>;
  /** Retrieve multiple reviews using the Relay connection interface */
  reviewsConnection: ReviewConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryCartArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CartWhereUniqueInput;
};


export type QueryCartItemArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CartItemWhereUniqueInput;
};


export type QueryCartItemVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCartItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CartItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<CartItemWhereInput>;
};


export type QueryCartItemsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CartItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<CartItemWhereInput>;
};


export type QueryCartVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCartsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CartOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<CartWhereInput>;
};


export type QueryCartsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CartOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<CartWhereInput>;
};


export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoryArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CategoryWhereUniqueInput;
};


export type QueryCategoryVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCollectionArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CollectionWhereUniqueInput;
};


export type QueryCollectionVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CollectionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<CollectionWhereInput>;
};


export type QueryCollectionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CollectionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<CollectionWhereInput>;
};


export type QueryEntitiesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  where: Array<EntityWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryOrderArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: OrderWhereUniqueInput;
};


export type QueryOrderVersionArgs = {
  where: VersionWhereInput;
};


export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<OrderOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryOrdersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<OrderOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryProductArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProductWhereUniqueInput;
};


export type QueryProductImageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProductImageWhereUniqueInput;
};


export type QueryProductImageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProductImagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductImageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ProductImageWhereInput>;
};


export type QueryProductImagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductImageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ProductImageWhereInput>;
};


export type QueryProductVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryProductsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryReviewArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ReviewWhereUniqueInput;
};


export type QueryReviewVersionArgs = {
  where: VersionWhereInput;
};


export type QueryReviewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ReviewOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ReviewWhereInput>;
};


export type QueryReviewsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ReviewOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ReviewWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  a: Scalars['RGBATransparency']['output'];
  b: Scalars['RGBAHue']['output'];
  g: Scalars['RGBAHue']['output'];
  r: Scalars['RGBAHue']['output'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']['input'];
  b: Scalars['RGBAHue']['input'];
  g: Scalars['RGBAHue']['input'];
  r: Scalars['RGBAHue']['input'];
};

export type Review = Entity & Node & {
  author: Scalars['String']['output'];
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description: Scalars['String']['output'];
  /** Get the document in other stages */
  documentInStages: Array<Review>;
  /** List of Review versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  product?: Maybe<Product>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  rating: Scalars['Int']['output'];
  reviewCreated?: Maybe<Scalars['DateTime']['output']>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String']['output'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ReviewCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ReviewDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type ReviewHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type ReviewProductArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ReviewPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ReviewScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ReviewUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ReviewConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ReviewWhereUniqueInput;
};

/** A connection to a list of items. */
export type ReviewConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ReviewEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ReviewCreateInput = {
  author: Scalars['String']['input'];
  clt7nhc6r1ydg07vz7gd1262i?: InputMaybe<ProductCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  product?: InputMaybe<ProductCreateOneInlineInput>;
  rating: Scalars['Int']['input'];
  reviewCreated?: InputMaybe<Scalars['DateTime']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ReviewCreateManyInlineInput = {
  /** Connect multiple existing Review documents */
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  /** Create and connect multiple existing Review documents */
  create?: InputMaybe<Array<ReviewCreateInput>>;
};

export type ReviewCreateOneInlineInput = {
  /** Connect one existing Review document */
  connect?: InputMaybe<ReviewWhereUniqueInput>;
  /** Create and connect one Review document */
  create?: InputMaybe<ReviewCreateInput>;
};

/** An edge in a connection. */
export type ReviewEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Review;
};

/** Identifies documents */
export type ReviewManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReviewWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReviewWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReviewWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  author?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  author_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  author_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  author_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  author_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  author_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  author_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  author_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  author_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  author_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<ReviewWhereStageInput>;
  documentInStages_none?: InputMaybe<ReviewWhereStageInput>;
  documentInStages_some?: InputMaybe<ReviewWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  product?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  rating_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  rating_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  rating_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  rating_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  rating_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  rating_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  rating_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  reviewCreated?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  reviewCreated_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  reviewCreated_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  reviewCreated_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  reviewCreated_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  reviewCreated_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  reviewCreated_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  reviewCreated_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type ReviewOrderByInput =
  | 'author_ASC'
  | 'author_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'rating_ASC'
  | 'rating_DESC'
  | 'reviewCreated_ASC'
  | 'reviewCreated_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type ReviewUpdateInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  clt7nhc6r1ydg07vz7gd1262i?: InputMaybe<ProductUpdateManyInlineInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<ProductUpdateOneInlineInput>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  reviewCreated?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ReviewUpdateManyInlineInput = {
  /** Connect multiple existing Review documents */
  connect?: InputMaybe<Array<ReviewConnectInput>>;
  /** Create and connect multiple Review documents */
  create?: InputMaybe<Array<ReviewCreateInput>>;
  /** Delete multiple Review documents */
  delete?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  /** Disconnect multiple Review documents */
  disconnect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Review documents */
  set?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  /** Update multiple Review documents */
  update?: InputMaybe<Array<ReviewUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Review documents */
  upsert?: InputMaybe<Array<ReviewUpsertWithNestedWhereUniqueInput>>;
};

export type ReviewUpdateManyInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  reviewCreated?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ReviewUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ReviewUpdateManyInput;
  /** Document search */
  where: ReviewWhereInput;
};

export type ReviewUpdateOneInlineInput = {
  /** Connect existing Review document */
  connect?: InputMaybe<ReviewWhereUniqueInput>;
  /** Create and connect one Review document */
  create?: InputMaybe<ReviewCreateInput>;
  /** Delete currently connected Review document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Review document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Review document */
  update?: InputMaybe<ReviewUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Review document */
  upsert?: InputMaybe<ReviewUpsertWithNestedWhereUniqueInput>;
};

export type ReviewUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ReviewUpdateInput;
  /** Unique document search */
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertInput = {
  /** Create document if it didn't exist */
  create: ReviewCreateInput;
  /** Update document if it exists */
  update: ReviewUpdateInput;
};

export type ReviewUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ReviewUpsertInput;
  /** Unique document search */
  where: ReviewWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ReviewWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ReviewWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReviewWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReviewWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReviewWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  author?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  author_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  author_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  author_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  author_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  author_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  author_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  author_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  author_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  author_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<ReviewWhereStageInput>;
  documentInStages_none?: InputMaybe<ReviewWhereStageInput>;
  documentInStages_some?: InputMaybe<ReviewWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  product?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  rating_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  rating_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  rating_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  rating_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  rating_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  rating_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  rating_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  reviewCreated?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  reviewCreated_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  reviewCreated_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  reviewCreated_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  reviewCreated_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  reviewCreated_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  reviewCreated_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  reviewCreated_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ReviewWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReviewWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReviewWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReviewWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ReviewWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Review record uniquely */
export type ReviewWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  /** Returns HTMl representation */
  html: Scalars['String']['output'];
  /** Returns Markdown representation */
  markdown: Scalars['String']['output'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST']['output'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Entity & Node & {
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']['output'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Cart | CartItem | Category | Collection | Order | Product | ProductImage | Review;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type ScheduledOperationOrderByInput =
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'errorMessage_ASC'
  | 'errorMessage_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'status_ASC'
  | 'status_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

/** System Scheduled Operation Status */
export type ScheduledOperationStatus =
  | 'CANCELED'
  | 'COMPLETED'
  | 'FAILED'
  | 'IN_PROGRESS'
  | 'PENDING';

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Entity & Node & {
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']['output'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']['output'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type ScheduledReleaseOrderByInput =
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'errorMessage_ASC'
  | 'errorMessage_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'isActive_ASC'
  | 'isActive_DESC'
  | 'isImplicit_ASC'
  | 'isImplicit_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'releaseAt_ASC'
  | 'releaseAt_DESC'
  | 'status_ASC'
  | 'status_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

/** System Scheduled Release Status */
export type ScheduledReleaseStatus =
  | 'COMPLETED'
  | 'FAILED'
  | 'IN_PROGRESS'
  | 'PENDING';

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Stage system enumeration */
export type Stage =
  /** The Draft is the default stage for all your content. */
  | 'DRAFT'
  /** The Published stage is where you can publish your content to. */
  | 'PUBLISHED';

export type SystemDateTimeFieldVariation =
  | 'BASE'
  | 'COMBINED'
  | 'LOCALIZATION';

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Entity & Node & {
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']['output'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String']['output'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export type UserKind =
  | 'APP_TOKEN'
  | 'MEMBER'
  | 'PAT'
  | 'PUBLIC'
  | 'WEBHOOK';

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type UserOrderByInput =
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'isActive_ASC'
  | 'isActive_DESC'
  | 'kind_ASC'
  | 'kind_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'picture_ASC'
  | 'picture_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Version = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID']['input'];
  revision: Scalars['Int']['input'];
  stage: Stage;
};

export type _FilterKind =
  | 'AND'
  | 'NOT'
  | 'OR'
  | 'contains'
  | 'contains_all'
  | 'contains_none'
  | 'contains_some'
  | 'ends_with'
  | 'eq'
  | 'eq_not'
  | 'gt'
  | 'gte'
  | 'in'
  | 'json_path_exists'
  | 'json_value_recursive'
  | 'lt'
  | 'lte'
  | 'not_contains'
  | 'not_ends_with'
  | 'not_in'
  | 'not_starts_with'
  | 'relational_every'
  | 'relational_none'
  | 'relational_single'
  | 'relational_some'
  | 'search'
  | 'starts_with'
  | 'union_empty'
  | 'union_every'
  | 'union_none'
  | 'union_single'
  | 'union_some';

export type _MutationInputFieldKind =
  | 'enum'
  | 'relation'
  | 'richText'
  | 'richTextWithEmbeds'
  | 'scalar'
  | 'union'
  | 'virtual';

export type _MutationKind =
  | 'create'
  | 'delete'
  | 'deleteMany'
  | 'publish'
  | 'publishMany'
  | 'schedulePublish'
  | 'scheduleUnpublish'
  | 'unpublish'
  | 'unpublishMany'
  | 'update'
  | 'updateMany'
  | 'upsert';

export type _OrderDirection =
  | 'asc'
  | 'desc';

export type _RelationInputCardinality =
  | 'many'
  | 'one';

export type _RelationInputKind =
  | 'create'
  | 'update';

export type _RelationKind =
  | 'regular'
  | 'union';

export type _SystemDateTimeFieldVariation =
  | 'base'
  | 'combined'
  | 'localization';

export type CartFragmentFragment = { id: string };

export type CartAddItemMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  totalPrice: Scalars['Int']['input'];
}>;


export type CartAddItemMutation = { createCartItem?: { id: string } | null };

export type CartCreateMutationVariables = Exact<{ [key: string]: never; }>;


export type CartCreateMutation = { createCart?: { id: string, items: Array<{ id: string, quantity: number, totalPrice: number, product?: { id: string, slug: string, name: string, description: string, price: number, rating: number, images: Array<{ url: string, alt: string }>, categories: Array<{ id: string, name: string }> } | null }> } | null };

export type CartGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CartGetByIdQuery = { cart?: { id: string, items: Array<{ id: string, quantity: number, totalPrice: number, product?: { id: string, slug: string, name: string, description: string, price: number, rating: number, images: Array<{ url: string, alt: string }>, categories: Array<{ id: string, name: string }> } | null }> } | null };

export type CartRemoveItemMutationVariables = Exact<{
  itemId: Scalars['ID']['input'];
}>;


export type CartRemoveItemMutation = { deleteCartItem?: { id: string } | null };

export type CartSetItemQuantityMutationVariables = Exact<{
  cartItemId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type CartSetItemQuantityMutation = { updateCartItem?: { id: string } | null };

export type CategoriesGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesGetListQuery = { categories: Array<{ id: string, name: string, slug: string }> };

export type CategoryGetBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CategoryGetBySlugQuery = { category?: { name: string, products: Array<{ id: string, slug: string, name: string, description: string, price: number, rating: number, images: Array<{ url: string, alt: string }>, categories: Array<{ id: string, name: string }> }> } | null };

export type ProductGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductGetByIdQuery = { product?: { id: string, slug: string, name: string, description: string, price: number, rating: number, images: Array<{ url: string, alt: string }>, categories: Array<{ id: string, name: string }> } | null };

export type ProductGetBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductGetBySlugQuery = { product?: { id: string, slug: string, name: string, description: string, price: number, rating: number, images: Array<{ url: string, alt: string }>, categories: Array<{ id: string, name: string }> } | null };

export type ProductItemFragmentFragment = { id: string, name: string, description: string, price: number, images: Array<{ url: string, alt: string }>, categories: Array<{ id: string, name: string }> };

export type ProductListItemFragmentFragment = { id: string, slug: string, name: string, description: string, price: number, rating: number, images: Array<{ url: string, alt: string }>, categories: Array<{ id: string, name: string }> };

export type ProductsGetListQueryVariables = Exact<{
  orderBy: ProductOrderByInput;
}>;


export type ProductsGetListQuery = { products: Array<{ id: string, slug: string, name: string, description: string, price: number, rating: number, images: Array<{ url: string, alt: string }>, categories: Array<{ id: string, name: string }> }> };

export type ProductsGetPaginatedListQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  orderBy: ProductOrderByInput;
}>;


export type ProductsGetPaginatedListQuery = { productsConnection: { edges: Array<{ node: { id: string, slug: string, name: string, description: string, price: number, rating: number, images: Array<{ url: string, alt: string }>, categories: Array<{ id: string, name: string }> } }>, pageInfo: { hasNextPage: boolean, hasPreviousPage: boolean }, aggregate: { count: number } } };

export type ReviewCreateMutationVariables = Exact<{
  author: Scalars['String']['input'];
  description: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
}>;


export type ReviewCreateMutation = { createReview?: { author: string, description: string, id: string, rating: number, title: string } | null };

export type ReviewPublishMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ReviewPublishMutation = { publishReview?: { id: string } | null };

export type ReviewsGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type ReviewsGetListQuery = { reviews: Array<{ author: string, description: string, id: string, rating: number, title: string }> };

export type ReviewsGetListByProductIdQueryVariables = Exact<{
  productId: Scalars['ID']['input'];
}>;


export type ReviewsGetListByProductIdQuery = { reviews: Array<{ author: string, description: string, id: string, rating: number, title: string }> };

export type SearchGetListQueryVariables = Exact<{
  query: Scalars['String']['input'];
}>;


export type SearchGetListQuery = { products: Array<{ name: string, slug: string, price: number, description: string }> };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const CartFragmentFragmentDoc = new TypedDocumentString(`
    fragment CartFragment on Cart {
  id
}
    `, {"fragmentName":"CartFragment"}) as unknown as TypedDocumentString<CartFragmentFragment, unknown>;
export const ProductItemFragmentFragmentDoc = new TypedDocumentString(`
    fragment ProductItemFragment on Product {
  id
  name
  description
  images {
    url
    alt
  }
  price
  categories {
    id
    name
  }
}
    `, {"fragmentName":"ProductItemFragment"}) as unknown as TypedDocumentString<ProductItemFragmentFragment, unknown>;
export const ProductListItemFragmentFragmentDoc = new TypedDocumentString(`
    fragment ProductListItemFragment on Product {
  id
  slug
  name
  description
  images {
    url
    alt
  }
  price
  rating
  categories {
    id
    name
  }
}
    `, {"fragmentName":"ProductListItemFragment"}) as unknown as TypedDocumentString<ProductListItemFragmentFragment, unknown>;
export const CartAddItemDocument = new TypedDocumentString(`
    mutation CartAddItem($cartId: ID!, $productId: ID!, $totalPrice: Int!) {
  createCartItem(
    data: {quantity: 1, totalPrice: $totalPrice, product: {connect: {id: $productId}}, cart: {connect: {id: $cartId}}}
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartAddItemMutation, CartAddItemMutationVariables>;
export const CartCreateDocument = new TypedDocumentString(`
    mutation CartCreate {
  createCart(data: {total: 0}) {
    id
    items {
      id
      quantity
      totalPrice
      product {
        ...ProductListItemFragment
      }
    }
  }
}
    fragment ProductListItemFragment on Product {
  id
  slug
  name
  description
  images {
    url
    alt
  }
  price
  rating
  categories {
    id
    name
  }
}`) as unknown as TypedDocumentString<CartCreateMutation, CartCreateMutationVariables>;
export const CartGetByIdDocument = new TypedDocumentString(`
    query CartGetById($id: ID!) {
  cart(where: {id: $id}, stage: DRAFT) {
    id
    items {
      id
      quantity
      totalPrice
      product {
        ...ProductListItemFragment
      }
    }
  }
}
    fragment ProductListItemFragment on Product {
  id
  slug
  name
  description
  images {
    url
    alt
  }
  price
  rating
  categories {
    id
    name
  }
}`) as unknown as TypedDocumentString<CartGetByIdQuery, CartGetByIdQueryVariables>;
export const CartRemoveItemDocument = new TypedDocumentString(`
    mutation CartRemoveItem($itemId: ID!) {
  deleteCartItem(where: {id: $itemId}) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartRemoveItemMutation, CartRemoveItemMutationVariables>;
export const CartSetItemQuantityDocument = new TypedDocumentString(`
    mutation CartSetItemQuantity($cartItemId: ID!, $quantity: Int!) {
  updateCartItem(where: {id: $cartItemId}, data: {quantity: $quantity}) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartSetItemQuantityMutation, CartSetItemQuantityMutationVariables>;
export const CategoriesGetListDocument = new TypedDocumentString(`
    query CategoriesGetList {
  categories {
    id
    name
    slug
  }
}
    `) as unknown as TypedDocumentString<CategoriesGetListQuery, CategoriesGetListQueryVariables>;
export const CategoryGetBySlugDocument = new TypedDocumentString(`
    query CategoryGetBySlug($slug: String!) {
  category(where: {slug: $slug}) {
    name
    products {
      ...ProductListItemFragment
    }
  }
}
    fragment ProductListItemFragment on Product {
  id
  slug
  name
  description
  images {
    url
    alt
  }
  price
  rating
  categories {
    id
    name
  }
}`) as unknown as TypedDocumentString<CategoryGetBySlugQuery, CategoryGetBySlugQueryVariables>;
export const ProductGetByIdDocument = new TypedDocumentString(`
    query ProductGetById($id: ID!) {
  product(where: {id: $id}) {
    ...ProductListItemFragment
  }
}
    fragment ProductListItemFragment on Product {
  id
  slug
  name
  description
  images {
    url
    alt
  }
  price
  rating
  categories {
    id
    name
  }
}`) as unknown as TypedDocumentString<ProductGetByIdQuery, ProductGetByIdQueryVariables>;
export const ProductGetBySlugDocument = new TypedDocumentString(`
    query ProductGetBySlug($slug: String!) {
  product(where: {slug: $slug}) {
    ...ProductListItemFragment
  }
}
    fragment ProductListItemFragment on Product {
  id
  slug
  name
  description
  images {
    url
    alt
  }
  price
  rating
  categories {
    id
    name
  }
}`) as unknown as TypedDocumentString<ProductGetBySlugQuery, ProductGetBySlugQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($orderBy: ProductOrderByInput!) {
  products(orderBy: $orderBy) {
    ...ProductListItemFragment
  }
}
    fragment ProductListItemFragment on Product {
  id
  slug
  name
  description
  images {
    url
    alt
  }
  price
  rating
  categories {
    id
    name
  }
}`) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;
export const ProductsGetPaginatedListDocument = new TypedDocumentString(`
    query ProductsGetPaginatedList($first: Int!, $skip: Int!, $orderBy: ProductOrderByInput!) {
  productsConnection(first: $first, skip: $skip, orderBy: $orderBy) {
    edges {
      node {
        ...ProductListItemFragment
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    aggregate {
      count
    }
  }
}
    fragment ProductListItemFragment on Product {
  id
  slug
  name
  description
  images {
    url
    alt
  }
  price
  rating
  categories {
    id
    name
  }
}`) as unknown as TypedDocumentString<ProductsGetPaginatedListQuery, ProductsGetPaginatedListQueryVariables>;
export const ReviewCreateDocument = new TypedDocumentString(`
    mutation ReviewCreate($author: String!, $description: String!, $productId: ID!, $rating: Int!, $title: String!) {
  createReview(
    data: {author: $author, description: $description, product: {connect: {id: $productId}}, rating: $rating, title: $title}
  ) {
    author
    description
    id
    rating
    title
  }
}
    `) as unknown as TypedDocumentString<ReviewCreateMutation, ReviewCreateMutationVariables>;
export const ReviewPublishDocument = new TypedDocumentString(`
    mutation ReviewPublish($id: ID!) {
  publishReview(where: {id: $id}) {
    id
  }
}
    `) as unknown as TypedDocumentString<ReviewPublishMutation, ReviewPublishMutationVariables>;
export const ReviewsGetListDocument = new TypedDocumentString(`
    query ReviewsGetList {
  reviews {
    author
    description
    id
    rating
    title
  }
}
    `) as unknown as TypedDocumentString<ReviewsGetListQuery, ReviewsGetListQueryVariables>;
export const ReviewsGetListByProductIdDocument = new TypedDocumentString(`
    query ReviewsGetListByProductId($productId: ID!) {
  reviews(where: {product: {id: $productId}}, stage: DRAFT) {
    author
    description
    id
    rating
    title
  }
}
    `) as unknown as TypedDocumentString<ReviewsGetListByProductIdQuery, ReviewsGetListByProductIdQueryVariables>;
export const SearchGetListDocument = new TypedDocumentString(`
    query SearchGetList($query: String!) {
  products(where: {_search: $query}) {
    name
    slug
    price
    description
  }
}
    `) as unknown as TypedDocumentString<SearchGetListQuery, SearchGetListQueryVariables>;