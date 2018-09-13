import Rest, { URL } from "../../utils";

export default class BlogService {
  constructor() {
    this.rest = new Rest();
  }

  extractBlog({ content, id, slug, title, virtuals }) {
    const { subtitle } = content; //TODO: need to update with ES208
    const { previewImage } = virtuals; //TODO: need to update with ES208
    const { imageId } = previewImage;
    const coverImage = imageId
      ? URL.mediumResource + "/" + imageId
      : URL.mediumDefaultImage;

    return {
      title,
      subtitle,
      coverImage,
      url: `${URL.medium}/${slug}-${id}`
    };
  }

  getPosts({ payload }) {
    const { references } = payload;
    return references.Post;
  }

  async getBlogs() {
    let posts = [];
    try {
      const response = await this.rest.get(`${URL.medium}/latest?format=json`);

      if (response.success) {
        posts = this.getPosts(response);
        return Object.keys(this.getPosts(response)).map(post =>
          this.extractBlog(posts[post])
        );
      } else {
        throw "Something went wrong!";
      }
    } catch (error) {
      throw new Error(error);
      /* posts = this.getPosts(resp);
      return Object.keys(this.getPosts(resp)).map(post =>
        this.extractBlog(posts[post])
      ); */
    }
  }
}

/* const resp = {
  success: true,
  payload: {
    user: {
      userId: "55402caf559c",
      name: "Hardik Pithva",
      username: "hardikpthv",
      createdAt: 1487532648234,
      lastPostCreatedAt: 1536164641720,
      imageId: "1*eFGazhlZeMzFzk5ht21zTQ.jpeg",
      backgroundImageId: "",
      bio: "",
      twitterScreenName: "hardikpthv",
      facebookAccountId: "",
      allowNotes: 1,
      mediumMemberAt: 0,
      isPartnerProgramEnrolled: false,
      type: "User"
    },
    streamItems: [
      {
        createdAt: 1536824137134,
        heading: {
          text: "Latest",
          heading: {
            fallbackTitle: "Latest",
            headingBasic: { title: "Latest" },
            headingType: "headingBasic"
          }
        },
        randomId: "44f247c395a0",
        itemType: "heading",
        type: "StreamItem"
      },
      {
        createdAt: 1536824137134,
        postPreview: {
          postId: "ce48fedcf94c",
          postSuggestionReasons: [{ reason: 28 }]
        },
        randomId: "f72077b870f6",
        itemType: "postPreview",
        type: "StreamItem"
      },
      {
        createdAt: 1536824137134,
        postPreview: {
          postId: "b4ee72ee6fc6",
          postSuggestionReasons: [{ reason: 28 }]
        },
        randomId: "5b4645bdeaab",
        itemType: "postPreview",
        type: "StreamItem"
      },
      {
        createdAt: 1536824137134,
        postPreview: {
          postId: "f6585a771917",
          postSuggestionReasons: [{ reason: 28 }]
        },
        randomId: "583fdc7371c1",
        itemType: "postPreview",
        type: "StreamItem"
      },
      {
        createdAt: 1536824137135,
        postPreview: {
          postId: "33b66e39c3ed",
          postSuggestionReasons: [{ reason: 28 }]
        },
        randomId: "14c06aff7f32",
        itemType: "postPreview",
        type: "StreamItem"
      },
      {
        createdAt: 1536824137135,
        postPreview: {
          postId: "43b0be187386",
          postSuggestionReasons: [{ reason: 28 }]
        },
        randomId: "54260ac853d5",
        itemType: "postPreview",
        type: "StreamItem"
      }
    ],
    userMeta: {
      numberOfPostsPublished: 6,
      userId: "55402caf559c",
      userSuggestionReason: {
        followeesWhoFollow: { users: [] },
        reason: "followeesWhoFollow"
      },
      collectionIds: [],
      authorTags: [
        {
          slug: "css",
          name: "CSS",
          postCount: 11146,
          virtuals: { isFollowing: false },
          metadata: {
            followerCount: 8747,
            postCount: 11146,
            coverImage: {
              id: "1*b0k8db8_eyD47jTNd89iIQ.png",
              originalWidth: 4096,
              originalHeight: 2048
            }
          },
          type: "Tag"
        },
        {
          slug: "style",
          name: "Style",
          postCount: 9048,
          virtuals: { isFollowing: false },
          metadata: {
            followerCount: 762,
            postCount: 9048,
            coverImage: {
              id: "1*0VhrnTeCs4_em7HwZYQaPw.jpeg",
              originalWidth: 3000,
              originalHeight: 2132,
              isFeatured: true,
              focusPercentX: 57,
              focusPercentY: 39
            }
          },
          type: "Tag"
        },
        {
          slug: "web",
          name: "Web",
          postCount: 7653,
          virtuals: { isFollowing: false },
          metadata: {
            followerCount: 350,
            postCount: 7653,
            coverImage: {
              id: "1*A5C9CBzOUUVl8XHUiwtaBQ.jpeg",
              originalWidth: 1546,
              originalHeight: 820
            }
          },
          type: "Tag"
        },
        {
          slug: "angular",
          name: "Angular",
          postCount: 4394,
          virtuals: { isFollowing: false },
          metadata: {
            followerCount: 1610,
            postCount: 4394,
            coverImage: {
              id: "0*2FNo1Wxk0kZX0QoH.png",
              originalWidth: 700,
              originalHeight: 387,
              isFeatured: true
            }
          },
          type: "Tag"
        },
        {
          slug: "typescript",
          name: "Typescript",
          postCount: 3118,
          virtuals: { isFollowing: false },
          metadata: {
            followerCount: 2198,
            postCount: 3118,
            coverImage: {
              id: "1*luZBAP5jAeQXIoKDlm2Lqg.jpeg",
              originalWidth: 3024,
              originalHeight: 4032,
              isFeatured: true
            }
          },
          type: "Tag"
        },
        {
          slug: "angular2",
          name: "Angular2",
          postCount: 2469,
          virtuals: { isFollowing: false },
          metadata: {
            followerCount: 3511,
            postCount: 2469,
            coverImage: {
              id: "1*xRhs4h2a_rGpXNpoSNlA9w.png",
              originalWidth: 500,
              originalHeight: 501,
              isFeatured: true
            }
          },
          type: "Tag"
        },
        {
          slug: "material-design",
          name: "Material Design",
          postCount: 1422,
          virtuals: { isFollowing: false },
          metadata: {
            followerCount: 2690,
            postCount: 1422,
            coverImage: {
              id: "1*2bmlj_WCGK8nrYXDWXTf5g.jpeg",
              originalWidth: 3840,
              originalHeight: 2160,
              isFeatured: true
            }
          },
          type: "Tag"
        },
        {
          slug: "angular-4",
          name: "Angular 4",
          postCount: 773,
          virtuals: { isFollowing: false },
          metadata: {
            followerCount: 335,
            postCount: 773,
            coverImage: {
              id: "1*sFNUGU_VVqVJqMYY3uslbA.jpeg",
              originalWidth: 486,
              originalHeight: 284,
              isFeatured: true
            }
          },
          type: "Tag"
        },
        {
          slug: "components",
          name: "Components",
          postCount: 654,
          virtuals: { isFollowing: false },
          metadata: {
            followerCount: 187,
            postCount: 654,
            coverImage: {
              id: "1*TatfeANQMBmjrk_nhKbZoA.jpeg",
              originalWidth: 4000,
              originalHeight: 3000
            }
          },
          type: "Tag"
        },
        {
          slug: "angular-cli",
          name: "Angular Cli",
          postCount: 515,
          virtuals: { isFollowing: false },
          metadata: {
            followerCount: 131,
            postCount: 515,
            coverImage: {
              id: "1*sFNUGU_VVqVJqMYY3uslbA.jpeg",
              originalWidth: 486,
              originalHeight: 284,
              isFeatured: true
            }
          },
          type: "Tag"
        },
        {
          slug: "angular-material",
          name: "Angular Material",
          postCount: 77,
          virtuals: { isFollowing: false },
          metadata: {
            followerCount: 10,
            postCount: 77,
            coverImage: {
              id: "1*o9sSAyGcDLihwnLwfHIssA.png",
              originalWidth: 1920,
              originalHeight: 1080
            }
          },
          type: "Tag"
        },
        {
          slug: "encapsulation",
          name: "Encapsulation",
          postCount: 45,
          virtuals: { isFollowing: false },
          metadata: {
            followerCount: 2,
            postCount: 45,
            coverImage: {
              id: "1*ECCjVyvU3orGHCNuPMS_-w.png",
              originalWidth: 971,
              originalHeight: 277,
              isFeatured: true
            }
          },
          type: "Tag"
        }
      ],
      featuredPostId: "",
      topWriterInTags: [],
      type: "UserMeta"
    },
    userNavItemList: {
      userNavItems: [
        {
          title: "Profile",
          url: "https://medium.com/@hardikpthv",
          systemItem: { systemType: 1 },
          navType: "systemItem"
        },
        {
          title: "Claps",
          url: "https://medium.com/@hardikpthv/has-recommended",
          systemItem: { systemType: 4 },
          navType: "systemItem"
        },
        {
          title: "Responses",
          url: "https://medium.com/@hardikpthv/responses",
          systemItem: { systemType: 3 },
          navType: "systemItem"
        }
      ]
    },
    userNavActiveIndex: -1,
    profileTypeName: "latest",
    isStandaloneEditPage: false,
    references: {
      User: {
        "55402caf559c": {
          userId: "55402caf559c",
          name: "Hardik Pithva",
          username: "hardikpthv",
          createdAt: 1487532648234,
          lastPostCreatedAt: 1536164641720,
          imageId: "1*eFGazhlZeMzFzk5ht21zTQ.jpeg",
          backgroundImageId: "",
          bio: "",
          twitterScreenName: "hardikpthv",
          facebookAccountId: "",
          allowNotes: 1,
          mediumMemberAt: 0,
          isPartnerProgramEnrolled: false,
          type: "User"
        }
      },
      Post: {
        ce48fedcf94c: {
          id: "ce48fedcf94c",
          versionId: "aa225ff3b00e",
          creatorId: "55402caf559c",
          homeCollectionId: "",
          title: "ViewEncapsulations in Angular Component",
          detectedLanguage: "en",
          latestVersion: "aa225ff3b00e",
          latestPublishedVersion: "aa225ff3b00e",
          hasUnpublishedEdits: false,
          latestRev: 787,
          createdAt: 1535628837441,
          updatedAt: 1536584501757,
          acceptedAt: 0,
          firstPublishedAt: 1535702436657,
          latestPublishedAt: 1536584501757,
          vote: false,
          experimentalCss: "",
          displayAuthor: "",
          content: {
            subtitle:
              "Assuming that you are aware of Shadow DOM. If not, I encourage you to have a quick look at Shadow DOM and MDN.",
            postDisplay: { coverless: true }
          },
          virtuals: {
            allowNotes: true,
            previewImage: {
              imageId: "1*oQ2OI4nnT4voA8Pr6BSNdw.png",
              filter: "",
              backgroundSize: "",
              originalWidth: 561,
              originalHeight: 246,
              strategy: "resample",
              height: 0,
              width: 0
            },
            wordCount: 393,
            imageCount: 9,
            readingTime: 2.6830188679245284,
            subtitle:
              "Assuming that you are aware of Shadow DOM. If not, I encourage you to have a quick look at Shadow DOM and MDN.",
            userPostRelation: {
              userId: "55402caf559c",
              postId: "ce48fedcf94c",
              readAt: 1536584502080,
              readLaterAddedAt: 0,
              votedAt: 0,
              collaboratorAddedAt: 0,
              notesAddedAt: 0,
              subscribedAt: 0,
              lastReadSectionName: "e8da",
              lastReadVersionId: "aa225ff3b00e",
              lastReadAt: 1536748441687,
              lastReadParagraphName: "84ba",
              lastReadPercentage: 0.86,
              viewedAt: 1536748374886,
              presentedCountInResponseManagement: 0,
              clapCount: 0,
              seriesUpdateNotifsOptedInAt: 0,
              queuedAt: 0,
              seriesFirstViewedAt: 0,
              presentedCountInStream: 34,
              seriesLastViewedAt: 0,
              audioProgressSec: 0
            },
            usersBySocialRecommends: [],
            noIndex: false,
            recommends: 0,
            isBookmarked: false,
            tags: [
              {
                slug: "angular",
                name: "Angular",
                postCount: 4394,
                virtuals: { isFollowing: false },
                metadata: {
                  followerCount: 1610,
                  postCount: 4394,
                  coverImage: {
                    id: "0*2FNo1Wxk0kZX0QoH.png",
                    originalWidth: 700,
                    originalHeight: 387,
                    isFeatured: true
                  }
                },
                type: "Tag"
              },
              {
                slug: "style",
                name: "Style",
                postCount: 9048,
                virtuals: { isFollowing: false },
                metadata: {
                  followerCount: 762,
                  postCount: 9048,
                  coverImage: {
                    id: "1*0VhrnTeCs4_em7HwZYQaPw.jpeg",
                    originalWidth: 3000,
                    originalHeight: 2132,
                    isFeatured: true,
                    focusPercentX: 57,
                    focusPercentY: 39
                  }
                },
                type: "Tag"
              },
              {
                slug: "components",
                name: "Components",
                postCount: 654,
                virtuals: { isFollowing: false },
                metadata: {
                  followerCount: 187,
                  postCount: 654,
                  coverImage: {
                    id: "1*TatfeANQMBmjrk_nhKbZoA.jpeg",
                    originalWidth: 4000,
                    originalHeight: 3000
                  }
                },
                type: "Tag"
              },
              {
                slug: "encapsulation",
                name: "Encapsulation",
                postCount: 45,
                virtuals: { isFollowing: false },
                metadata: {
                  followerCount: 2,
                  postCount: 45,
                  coverImage: {
                    id: "1*ECCjVyvU3orGHCNuPMS_-w.png",
                    originalWidth: 971,
                    originalHeight: 277,
                    isFeatured: true
                  }
                },
                type: "Tag"
              },
              {
                slug: "css",
                name: "CSS",
                postCount: 11146,
                virtuals: { isFollowing: false },
                metadata: {
                  followerCount: 8747,
                  postCount: 11146,
                  coverImage: {
                    id: "1*b0k8db8_eyD47jTNd89iIQ.png",
                    originalWidth: 4096,
                    originalHeight: 2048
                  }
                },
                type: "Tag"
              }
            ],
            socialRecommendsCount: 0,
            responsesCreatedCount: 1,
            links: {
              entries: [
                {
                  url: "https://caniuse.com/#feat=shadowdomv1",
                  alts: [],
                  httpStatus: 200
                },
                {
                  url:
                    "https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM",
                  alts: [],
                  httpStatus: 200
                }
              ],
              version: "0.3",
              generatedAt: 1536584502912
            },
            isLockedPreviewOnly: false,
            takeoverId: "",
            metaDescription: "",
            totalClapCount: 0,
            sectionCount: 1,
            readingList: 0,
            topics: []
          },
          coverless: true,
          slug: "viewencapsulations-in-angular-component",
          translationSourcePostId: "",
          translationSourceCreatorId: "",
          isApprovedTranslation: false,
          inResponseToPostId: "",
          inResponseToRemovedAt: 0,
          isTitleSynthesized: true,
          allowResponses: true,
          importedUrl: "",
          importedPublishedAt: 0,
          visibility: 0,
          uniqueSlug: "viewencapsulations-in-angular-component-ce48fedcf94c",
          previewContent: {
            bodyModel: {
              paragraphs: [
                {
                  name: "previewImage",
                  type: 4,
                  text: "",
                  layout: 10,
                  metadata: {
                    id: "1*oQ2OI4nnT4voA8Pr6BSNdw.png",
                    originalWidth: 561,
                    originalHeight: 246,
                    isFeatured: true
                  }
                },
                {
                  name: "7399",
                  type: 3,
                  text: "ViewEncapsulations in Angular Component",
                  markups: [],
                  alignment: 1
                },
                {
                  name: "0dbf",
                  type: 1,
                  text:
                    "Assuming that you are aware of Shadow DOM. If not, I encourage you to have a quick look at…",
                  markups: [],
                  alignment: 1
                }
              ],
              sections: [{ startIndex: 0 }]
            },
            isFullContent: false,
            subtitle:
              "Assuming that you are aware of Shadow DOM. If not, I encourage you to have a quick look at Shadow DOM and MDN."
          },
          license: 0,
          inResponseToMediaResourceId: "",
          canonicalUrl: "",
          approvedHomeCollectionId: "",
          newsletterId: "",
          webCanonicalUrl: "",
          mediumUrl: "",
          migrationId: "",
          notifyFollowers: true,
          notifyTwitter: false,
          isSponsored: false,
          isRequestToPubDisabled: false,
          notifyFacebook: false,
          responseHiddenOnParentPostAt: 0,
          isSeries: false,
          isSubscriptionLocked: false,
          seriesLastAppendedAt: 0,
          audioVersionDurationSec: 0,
          sequenceId: "",
          isNsfw: false,
          isEligibleForRevenue: false,
          isBlockedFromHightower: false,
          deletedAt: 0,
          lockedPostSource: 0,
          hightowerMinimumGuaranteeStartsAt: 0,
          hightowerMinimumGuaranteeEndsAt: 0,
          featureLockRequestAcceptedAt: 0,
          featureLockRequestMinimumGuaranteeAmount: 0,
          isElevate: false,
          mongerRequestType: 1,
          layerCake: 0,
          socialTitle: "",
          socialDek: "",
          editorialPreviewTitle: "",
          editorialPreviewDek: "",
          type: "Post"
        },
        b4ee72ee6fc6: {
          id: "b4ee72ee6fc6",
          versionId: "e1bc966c579a",
          creatorId: "55402caf559c",
          homeCollectionId: "",
          title: "What’s new in Angular v6?",
          detectedLanguage: "en",
          latestVersion: "e1bc966c579a",
          latestPublishedVersion: "e1bc966c579a",
          hasUnpublishedEdits: false,
          latestRev: 1048,
          createdAt: 1525668875335,
          updatedAt: 1536823310162,
          acceptedAt: 0,
          firstPublishedAt: 1527348010912,
          latestPublishedAt: 1536823310162,
          vote: false,
          experimentalCss: "",
          displayAuthor: "",
          content: {
            subtitle:
              "Well, Angular v6 released a few weeks ago and this time all was together Gandalf, Frodo and Samwise. Let’s see what they brought in this…",
            postDisplay: { coverless: true },
            metaDescription:
              "RxJS is the independent project which is being led by Ben Lesh who is also part of Angular Core team. A few weeks ago RxJS v6 released and as angular has been using RxJS from the very beginning, it…"
          },
          virtuals: {
            allowNotes: true,
            previewImage: {
              imageId: "1*mG8pNrSIpx8M53rNL51Ghw.jpeg",
              filter: "",
              backgroundSize: "",
              originalWidth: 1000,
              originalHeight: 750,
              strategy: "resample",
              height: 0,
              width: 0
            },
            wordCount: 515,
            imageCount: 2,
            readingTime: 2.326729559748428,
            subtitle:
              "Well, Angular v6 released a few weeks ago and this time all was together Gandalf, Frodo and Samwise. Let’s see what they brought in this…",
            userPostRelation: {
              userId: "55402caf559c",
              postId: "b4ee72ee6fc6",
              readAt: 1536823310494,
              readLaterAddedAt: 0,
              votedAt: 0,
              collaboratorAddedAt: 0,
              notesAddedAt: 0,
              subscribedAt: 0,
              lastReadSectionName: "fd93",
              lastReadVersionId: "1bcbb6765e47",
              lastReadAt: 1536567334456,
              lastReadParagraphName: "14ec",
              lastReadPercentage: 0.85,
              viewedAt: 1536823317391,
              presentedCountInResponseManagement: 0,
              clapCount: 0,
              seriesUpdateNotifsOptedInAt: 0,
              queuedAt: 0,
              seriesFirstViewedAt: 0,
              presentedCountInStream: 25,
              seriesLastViewedAt: 0,
              audioProgressSec: 0
            },
            usersBySocialRecommends: [],
            noIndex: false,
            recommends: 0,
            isBookmarked: false,
            tags: [
              {
                slug: "angular",
                name: "Angular",
                postCount: 4394,
                virtuals: { isFollowing: false },
                metadata: {
                  followerCount: 1610,
                  postCount: 4394,
                  coverImage: {
                    id: "0*2FNo1Wxk0kZX0QoH.png",
                    originalWidth: 700,
                    originalHeight: 387,
                    isFeatured: true
                  }
                },
                type: "Tag"
              },
              {
                slug: "material-design",
                name: "Material Design",
                postCount: 1422,
                virtuals: { isFollowing: false },
                metadata: {
                  followerCount: 2690,
                  postCount: 1422,
                  coverImage: {
                    id: "1*2bmlj_WCGK8nrYXDWXTf5g.jpeg",
                    originalWidth: 3840,
                    originalHeight: 2160,
                    isFeatured: true
                  }
                },
                type: "Tag"
              },
              {
                slug: "angular-cli",
                name: "Angular Cli",
                postCount: 515,
                virtuals: { isFollowing: false },
                metadata: {
                  followerCount: 131,
                  postCount: 515,
                  coverImage: {
                    id: "1*sFNUGU_VVqVJqMYY3uslbA.jpeg",
                    originalWidth: 486,
                    originalHeight: 284,
                    isFeatured: true
                  }
                },
                type: "Tag"
              },
              {
                slug: "angular-material",
                name: "Angular Material",
                postCount: 77,
                virtuals: { isFollowing: false },
                metadata: {
                  followerCount: 10,
                  postCount: 77,
                  coverImage: {
                    id: "1*o9sSAyGcDLihwnLwfHIssA.png",
                    originalWidth: 1920,
                    originalHeight: 1080
                  }
                },
                type: "Tag"
              }
            ],
            socialRecommendsCount: 0,
            responsesCreatedCount: 0,
            links: {
              entries: [
                {
                  url:
                    "https://github.com/angular/devkit/blob/master/docs/specifications/update.md",
                  alts: [],
                  httpStatus: 404
                },
                {
                  url:
                    "https://material.angular.io/components/paginator/overview",
                  alts: [],
                  httpStatus: 200
                },
                {
                  url: "https://material.angular.io/components/tree/overview",
                  alts: [],
                  httpStatus: 200
                },
                {
                  url: "https://material.angular.io/components/table/overview",
                  alts: [],
                  httpStatus: 200
                },
                {
                  url: "https://material.angular.io/components/badge/overview",
                  alts: [],
                  httpStatus: 200
                },
                {
                  url:
                    "https://material.angular.io/components/bottom-sheet/overview",
                  alts: [],
                  httpStatus: 200
                },
                {
                  url: "https://github.com/angular/angular-cli/wiki/add",
                  alts: [],
                  httpStatus: 200
                },
                {
                  url:
                    "https://github.com/ReactiveX/rxjs/blob/master/MIGRATION.md",
                  alts: [],
                  httpStatus: 200
                },
                {
                  url:
                    "https://github.com/angular/angular-cli/wiki/angular-workspace",
                  alts: [],
                  httpStatus: 200
                },
                {
                  url: "https://www.youtube.com/watch?v=JCXZhe6KsxQ",
                  alts: [
                    {
                      type: 2,
                      url:
                        "vnd.youtube://www.youtube.com/watch?v=JCXZhe6KsxQ&feature=applinks"
                    },
                    {
                      type: 3,
                      url:
                        "vnd.youtube://www.youtube.com/watch?v=JCXZhe6KsxQ&feature=applinks"
                    }
                  ],
                  httpStatus: 200
                },
                {
                  url: "https://github.com/dherges/ng-packagr",
                  alts: [],
                  httpStatus: 200
                },
                {
                  url:
                    "https://stackblitz.com/edit/angular-f3nrpv?file=app%2Fapp.module.ts",
                  alts: [],
                  httpStatus: 200
                },
                {
                  url:
                    "https://medium.com/webpack/webpack-4-released-today-6cdb994702d4",
                  alts: [
                    { type: 2, url: "medium://p/6cdb994702d4" },
                    { type: 3, url: "medium://p/6cdb994702d4" }
                  ],
                  httpStatus: 200
                }
              ],
              version: "0.3",
              generatedAt: 1536823372192
            },
            isLockedPreviewOnly: false,
            takeoverId: "",
            metaDescription:
              "RxJS is the independent project which is being led by Ben Lesh who is also part of Angular Core team. A few weeks ago RxJS v6 released and as angular has been using RxJS from the very beginning, it…",
            totalClapCount: 0,
            sectionCount: 2,
            readingList: 0,
            topics: []
          },
          coverless: true,
          slug: "whats-new-in-angular-angular-material-angular-cli-rxjs-v6",
          translationSourcePostId: "",
          translationSourceCreatorId: "",
          isApprovedTranslation: false,
          inResponseToPostId: "",
          inResponseToRemovedAt: 0,
          isTitleSynthesized: false,
          allowResponses: true,
          importedUrl: "",
          importedPublishedAt: 0,
          visibility: 0,
          uniqueSlug:
            "whats-new-in-angular-angular-material-angular-cli-rxjs-v6-b4ee72ee6fc6",
          previewContent: {
            bodyModel: {
              paragraphs: [
                {
                  name: "previewImage",
                  type: 4,
                  text: "",
                  layout: 10,
                  metadata: {
                    id: "1*mG8pNrSIpx8M53rNL51Ghw.jpeg",
                    originalWidth: 1000,
                    originalHeight: 750
                  }
                },
                {
                  name: "previewTitle",
                  type: 3,
                  text: "What’s new in Angular v6?",
                  alignment: 1
                },
                {
                  name: "previewSubtitle",
                  type: 13,
                  text:
                    "Well, Angular v6 released a few weeks ago and this time all was together…",
                  alignment: 1
                }
              ],
              sections: [{ startIndex: 0 }]
            },
            isFullContent: false,
            subtitle:
              "Well, Angular v6 released a few weeks ago and this time all was together Gandalf, Frodo and Samwise. Let’s see what they brought in this…"
          },
          license: 0,
          inResponseToMediaResourceId: "",
          canonicalUrl: "",
          approvedHomeCollectionId: "",
          newsletterId: "",
          webCanonicalUrl: "",
          mediumUrl: "",
          migrationId: "",
          notifyFollowers: true,
          notifyTwitter: false,
          isSponsored: false,
          isRequestToPubDisabled: false,
          notifyFacebook: false,
          responseHiddenOnParentPostAt: 0,
          isSeries: false,
          isSubscriptionLocked: false,
          seriesLastAppendedAt: 0,
          audioVersionDurationSec: 0,
          sequenceId: "",
          isNsfw: false,
          isEligibleForRevenue: false,
          isBlockedFromHightower: false,
          deletedAt: 0,
          lockedPostSource: 0,
          hightowerMinimumGuaranteeStartsAt: 0,
          hightowerMinimumGuaranteeEndsAt: 0,
          featureLockRequestAcceptedAt: 0,
          featureLockRequestMinimumGuaranteeAmount: 0,
          isElevate: false,
          mongerRequestType: 1,
          layerCake: 0,
          socialTitle: "",
          socialDek: "",
          editorialPreviewTitle: "",
          editorialPreviewDek: "",
          type: "Post"
        },
        f6585a771917: {
          id: "f6585a771917",
          versionId: "ca499b52f34",
          creatorId: "55402caf559c",
          homeCollectionId: "",
          title: "What’s new in Angular v5?",
          detectedLanguage: "en",
          latestVersion: "ca499b52f34",
          latestPublishedVersion: "ca499b52f34",
          hasUnpublishedEdits: false,
          latestRev: 906,
          createdAt: 1509563943832,
          updatedAt: 1536823457405,
          acceptedAt: 0,
          firstPublishedAt: 1509569306873,
          latestPublishedAt: 1536823457405,
          vote: false,
          experimentalCss: "",
          displayAuthor: "",
          content: {
            subtitle:
              "Let’s find out new features introduced in Angular version 5,  implement in our projects to improve the performance.",
            postDisplay: { coverless: true },
            metaDescription:
              "ServerTransferStateModule & BrowserTransferStateModule generates information as part of rendering with platform-server and transfers it to the client side; no need to be regenerated."
          },
          virtuals: {
            allowNotes: true,
            previewImage: {
              imageId: "1*hkN897-YGHZAdFK0_KiaOg.jpeg",
              filter: "",
              backgroundSize: "",
              originalWidth: 1024,
              originalHeight: 681,
              strategy: "resample",
              height: 0,
              width: 0
            },
            wordCount: 387,
            imageCount: 1,
            readingTime: 1.660377358490566,
            subtitle:
              "Let’s find out new features introduced in Angular version 5,  implement in our projects to improve the performance.",
            userPostRelation: {
              userId: "55402caf559c",
              postId: "f6585a771917",
              readAt: 1536823457754,
              readLaterAddedAt: 0,
              votedAt: 0,
              collaboratorAddedAt: 0,
              notesAddedAt: 0,
              subscribedAt: 0,
              lastReadSectionName: "f077",
              lastReadVersionId: "ca499b52f34",
              lastReadAt: 1536823463737,
              lastReadParagraphName: "8877",
              lastReadPercentage: 0.7,
              viewedAt: 1536823463659,
              presentedCountInResponseManagement: 0,
              clapCount: 0,
              seriesUpdateNotifsOptedInAt: 0,
              queuedAt: 0,
              seriesFirstViewedAt: 0,
              presentedCountInStream: 51,
              seriesLastViewedAt: 0,
              audioProgressSec: 0
            },
            usersBySocialRecommends: [],
            noIndex: false,
            recommends: 3,
            isBookmarked: false,
            tags: [
              {
                slug: "angular",
                name: "Angular",
                postCount: 4394,
                virtuals: { isFollowing: false },
                metadata: {
                  followerCount: 1610,
                  postCount: 4394,
                  coverImage: {
                    id: "0*2FNo1Wxk0kZX0QoH.png",
                    originalWidth: 700,
                    originalHeight: 387,
                    isFeatured: true
                  }
                },
                type: "Tag"
              },
              {
                slug: "typescript",
                name: "Typescript",
                postCount: 3118,
                virtuals: { isFollowing: false },
                metadata: {
                  followerCount: 2198,
                  postCount: 3118,
                  coverImage: {
                    id: "1*luZBAP5jAeQXIoKDlm2Lqg.jpeg",
                    originalWidth: 3024,
                    originalHeight: 4032,
                    isFeatured: true
                  }
                },
                type: "Tag"
              },
              {
                slug: "web",
                name: "Web",
                postCount: 7653,
                virtuals: { isFollowing: false },
                metadata: {
                  followerCount: 350,
                  postCount: 7653,
                  coverImage: {
                    id: "1*A5C9CBzOUUVl8XHUiwtaBQ.jpeg",
                    originalWidth: 1546,
                    originalHeight: 820
                  }
                },
                type: "Tag"
              }
            ],
            socialRecommendsCount: 0,
            responsesCreatedCount: 0,
            links: {
              entries: [
                {
                  url:
                    "https://docs.google.com/spreadsheets/d/12iygt-_cakNP1VO7MV9g4lq9NsxVWG4tSfc98HpHb0k/edit#gid=0",
                  alts: [],
                  httpStatus: 200
                },
                {
                  url:
                    "https://github.com/ReactiveX/rxjs/blob/master/doc/lettable-operators.md",
                  alts: [],
                  httpStatus: 200
                },
                {
                  url: "https://github.com/fgnass/domino",
                  alts: [],
                  httpStatus: 200
                }
              ],
              version: "0.3",
              generatedAt: 1536823457846
            },
            isLockedPreviewOnly: false,
            takeoverId: "",
            metaDescription:
              "ServerTransferStateModule & BrowserTransferStateModule generates information as part of rendering with platform-server and transfers it to the client side; no need to be regenerated.",
            totalClapCount: 20,
            sectionCount: 1,
            readingList: 0,
            topics: []
          },
          coverless: true,
          slug: "whats-new-in-angular-5",
          translationSourcePostId: "",
          translationSourceCreatorId: "",
          isApprovedTranslation: false,
          inResponseToPostId: "",
          inResponseToRemovedAt: 0,
          isTitleSynthesized: false,
          allowResponses: true,
          importedUrl: "",
          importedPublishedAt: 0,
          visibility: 0,
          uniqueSlug: "whats-new-in-angular-5-f6585a771917",
          previewContent: {
            bodyModel: {
              paragraphs: [
                {
                  name: "previewImage",
                  type: 4,
                  text: "",
                  layout: 10,
                  metadata: {
                    id: "1*hkN897-YGHZAdFK0_KiaOg.jpeg",
                    originalWidth: 1024,
                    originalHeight: 681
                  }
                },
                {
                  name: "previewTitle",
                  type: 3,
                  text: "What’s new in Angular v5?",
                  alignment: 1
                },
                {
                  name: "previewSubtitle",
                  type: 13,
                  text:
                    "Let’s find out new features introduced in Angular version 5,  implement in…",
                  alignment: 1
                }
              ],
              sections: [{ startIndex: 0 }]
            },
            isFullContent: false,
            subtitle:
              "Let’s find out new features introduced in Angular version 5,  implement in our projects to improve the performance."
          },
          license: 0,
          inResponseToMediaResourceId: "",
          canonicalUrl: "",
          approvedHomeCollectionId: "",
          newsletterId: "",
          webCanonicalUrl: "",
          mediumUrl: "",
          migrationId: "",
          notifyFollowers: true,
          notifyTwitter: false,
          isSponsored: false,
          isRequestToPubDisabled: false,
          notifyFacebook: false,
          responseHiddenOnParentPostAt: 0,
          isSeries: false,
          isSubscriptionLocked: false,
          seriesLastAppendedAt: 0,
          audioVersionDurationSec: 0,
          sequenceId: "",
          isNsfw: false,
          isEligibleForRevenue: false,
          isBlockedFromHightower: false,
          deletedAt: 0,
          lockedPostSource: 0,
          hightowerMinimumGuaranteeStartsAt: 0,
          hightowerMinimumGuaranteeEndsAt: 0,
          featureLockRequestAcceptedAt: 0,
          featureLockRequestMinimumGuaranteeAmount: 0,
          isElevate: false,
          mongerRequestType: 1,
          layerCake: 0,
          socialTitle: "",
          socialDek: "",
          editorialPreviewTitle: "",
          editorialPreviewDek: "",
          type: "Post"
        },
        "33b66e39c3ed": {
          id: "33b66e39c3ed",
          versionId: "5b6fbdb19255",
          creatorId: "55402caf559c",
          homeCollectionId: "",
          title: "Materializing Angular",
          detectedLanguage: "en",
          latestVersion: "5b6fbdb19255",
          latestPublishedVersion: "5b6fbdb19255",
          hasUnpublishedEdits: false,
          latestRev: 496,
          createdAt: 1508412510689,
          updatedAt: 1536823572666,
          acceptedAt: 0,
          firstPublishedAt: 1508418086754,
          latestPublishedAt: 1536823572666,
          vote: false,
          experimentalCss: "",
          displayAuthor: "",
          content: {
            subtitle:
              "Create a beautiful and stunning design with Angular Material Component and Flex layout.",
            postDisplay: { coverless: true },
            metaDescription:
              "Google’s Material Design has been popular and widely used since the release of Android Lollipop and Inbox. Most of Google’s mobile applications for Android as well as desktop Web-interfaces had…"
          },
          virtuals: {
            allowNotes: true,
            previewImage: {
              imageId: "1*3cNKnGpcmuwIZ5UmWjBu7g.png",
              filter: "",
              backgroundSize: "",
              originalWidth: 960,
              originalHeight: 540,
              strategy: "resample",
              height: 0,
              width: 0
            },
            wordCount: 232,
            imageCount: 1,
            readingTime: 1.0754716981132075,
            subtitle:
              "Create a beautiful and stunning design with Angular Material Component and Flex layout.",
            userPostRelation: {
              userId: "55402caf559c",
              postId: "33b66e39c3ed",
              readAt: 1536823572844,
              readLaterAddedAt: 0,
              votedAt: 0,
              collaboratorAddedAt: 0,
              notesAddedAt: 0,
              subscribedAt: 0,
              lastReadSectionName: "9847",
              lastReadVersionId: "eabe43e254ae",
              lastReadAt: 1536822191317,
              lastReadParagraphName: "f186",
              lastReadPercentage: 0.88,
              viewedAt: 1536823575383,
              presentedCountInResponseManagement: 0,
              clapCount: 0,
              seriesUpdateNotifsOptedInAt: 0,
              queuedAt: 0,
              seriesFirstViewedAt: 0,
              presentedCountInStream: 42,
              seriesLastViewedAt: 0,
              audioProgressSec: 0
            },
            usersBySocialRecommends: [],
            noIndex: false,
            recommends: 2,
            isBookmarked: false,
            tags: [
              {
                slug: "material-design",
                name: "Material Design",
                postCount: 1422,
                virtuals: { isFollowing: false },
                metadata: {
                  followerCount: 2690,
                  postCount: 1422,
                  coverImage: {
                    id: "1*2bmlj_WCGK8nrYXDWXTf5g.jpeg",
                    originalWidth: 3840,
                    originalHeight: 2160,
                    isFeatured: true
                  }
                },
                type: "Tag"
              },
              {
                slug: "angular-4",
                name: "Angular 4",
                postCount: 773,
                virtuals: { isFollowing: false },
                metadata: {
                  followerCount: 335,
                  postCount: 773,
                  coverImage: {
                    id: "1*sFNUGU_VVqVJqMYY3uslbA.jpeg",
                    originalWidth: 486,
                    originalHeight: 284,
                    isFeatured: true
                  }
                },
                type: "Tag"
              },
              {
                slug: "angular2",
                name: "Angular2",
                postCount: 2469,
                virtuals: { isFollowing: false },
                metadata: {
                  followerCount: 3511,
                  postCount: 2469,
                  coverImage: {
                    id: "1*xRhs4h2a_rGpXNpoSNlA9w.png",
                    originalWidth: 500,
                    originalHeight: 501,
                    isFeatured: true
                  }
                },
                type: "Tag"
              },
              {
                slug: "angular",
                name: "Angular",
                postCount: 4394,
                virtuals: { isFollowing: false },
                metadata: {
                  followerCount: 1610,
                  postCount: 4394,
                  coverImage: {
                    id: "0*2FNo1Wxk0kZX0QoH.png",
                    originalWidth: 700,
                    originalHeight: 387,
                    isFeatured: true
                  }
                },
                type: "Tag"
              },
              {
                slug: "angular-material",
                name: "Angular Material",
                postCount: 77,
                virtuals: { isFollowing: false },
                metadata: {
                  followerCount: 10,
                  postCount: 77,
                  coverImage: {
                    id: "1*o9sSAyGcDLihwnLwfHIssA.png",
                    originalWidth: 1920,
                    originalHeight: 1080
                  }
                },
                type: "Tag"
              }
            ],
            socialRecommendsCount: 0,
            responsesCreatedCount: 0,
            links: {
              entries: [
                {
                  url: "http://www.google.co.in/inbox/",
                  alts: [],
                  httpStatus: 200
                },
                {
                  url: "https://material.angular.io/",
                  alts: [],
                  httpStatus: 200
                },
                {
                  url: "https://www.android.com/versions/lollipop-5-0/",
                  alts: [],
                  httpStatus: 200
                },
                {
                  url: "https://twitter.com/gdgpune",
                  alts: [
                    { type: 2, url: "twitter://user?screen_name=GDGPune" },
                    { type: 3, url: "twitter://user?screen_name=GDGPune" }
                  ],
                  httpStatus: 200
                },
                {
                  url: "https://github.com/angular/material2",
                  alts: [],
                  httpStatus: 200
                },
                {
                  url: "https://material.angularjs.org/",
                  alts: [],
                  httpStatus: 200
                },
                {
                  url: "https://bit.ly/devfest-pune-17",
                  alts: [],
                  httpStatus: 200
                },
                {
                  url:
                    "https://marketplace.visualstudio.com/items?itemName=hardikpthv.AngularMaterial",
                  alts: [],
                  httpStatus: 200
                },
                { url: "https://material.io/", alts: [], httpStatus: 200 }
              ],
              version: "0.3",
              generatedAt: 1536823574127
            },
            isLockedPreviewOnly: false,
            takeoverId: "",
            metaDescription:
              "Google’s Material Design has been popular and widely used since the release of Android Lollipop and Inbox. Most of Google’s mobile applications for Android as well as desktop Web-interfaces had…",
            totalClapCount: 2,
            sectionCount: 1,
            readingList: 0,
            topics: []
          },
          coverless: true,
          slug: "materializing-angular",
          translationSourcePostId: "",
          translationSourceCreatorId: "",
          isApprovedTranslation: false,
          inResponseToPostId: "",
          inResponseToRemovedAt: 0,
          isTitleSynthesized: false,
          allowResponses: true,
          importedUrl: "",
          importedPublishedAt: 0,
          visibility: 0,
          uniqueSlug: "materializing-angular-33b66e39c3ed",
          previewContent: {
            bodyModel: {
              paragraphs: [
                {
                  name: "previewImage",
                  type: 4,
                  text: "",
                  layout: 10,
                  metadata: {
                    id: "1*3cNKnGpcmuwIZ5UmWjBu7g.png",
                    originalWidth: 960,
                    originalHeight: 540
                  }
                },
                {
                  name: "previewTitle",
                  type: 3,
                  text: "Materializing Angular",
                  alignment: 1
                },
                {
                  name: "previewSubtitle",
                  type: 13,
                  text:
                    "Create a beautiful and stunning design with Angular Material Component and Flex…",
                  alignment: 1
                }
              ],
              sections: [{ startIndex: 0 }]
            },
            isFullContent: false,
            subtitle:
              "Create a beautiful and stunning design with Angular Material Component and Flex layout."
          },
          license: 0,
          inResponseToMediaResourceId: "",
          canonicalUrl: "",
          approvedHomeCollectionId: "",
          newsletterId: "",
          webCanonicalUrl: "",
          mediumUrl: "",
          migrationId: "",
          notifyFollowers: true,
          notifyTwitter: true,
          isSponsored: false,
          isRequestToPubDisabled: false,
          notifyFacebook: false,
          responseHiddenOnParentPostAt: 0,
          isSeries: false,
          isSubscriptionLocked: false,
          seriesLastAppendedAt: 0,
          audioVersionDurationSec: 0,
          sequenceId: "",
          isNsfw: false,
          isEligibleForRevenue: false,
          isBlockedFromHightower: false,
          deletedAt: 0,
          lockedPostSource: 0,
          hightowerMinimumGuaranteeStartsAt: 0,
          hightowerMinimumGuaranteeEndsAt: 0,
          featureLockRequestAcceptedAt: 0,
          featureLockRequestMinimumGuaranteeAmount: 0,
          isElevate: false,
          mongerRequestType: 1,
          layerCake: 0,
          socialTitle: "",
          socialDek: "",
          editorialPreviewTitle: "",
          editorialPreviewDek: "",
          type: "Post"
        },
        "43b0be187386": {
          id: "43b0be187386",
          versionId: "fac2aed6a7a",
          creatorId: "55402caf559c",
          homeCollectionId: "",
          title: "What’s new in Angular v4?",
          detectedLanguage: "en",
          latestVersion: "fac2aed6a7a",
          latestPublishedVersion: "fac2aed6a7a",
          hasUnpublishedEdits: false,
          latestRev: 461,
          createdAt: 1488303349276,
          updatedAt: 1536824131005,
          acceptedAt: 0,
          firstPublishedAt: 1490693411237,
          latestPublishedAt: 1536824131005,
          vote: false,
          experimentalCss: "",
          displayAuthor: "",
          content: {
            subtitle:
              "Here after a few RC releases Angular version 4.0.0 — invisible-makeover — is now available.",
            postDisplay: { coverless: true },
            metaDescription:
              "Here after a few RC releases Angular version 4.0.0 — invisible-makeover — is now available. This is a major release, and is backwards compatible with 2.x.x for most applications. Some major…"
          },
          virtuals: {
            allowNotes: true,
            previewImage: {
              imageId: "1*2WqwLom36otbBqnZJn44Ww.png",
              filter: "",
              backgroundSize: "",
              originalWidth: 1435,
              originalHeight: 440,
              strategy: "resample",
              height: 0,
              width: 0
            },
            wordCount: 602,
            imageCount: 1,
            readingTime: 2.4716981132075473,
            subtitle:
              "Here after a few RC releases Angular version 4.0.0 — invisible-makeover — is now available.",
            userPostRelation: {
              userId: "55402caf559c",
              postId: "43b0be187386",
              readAt: 1536824131207,
              readLaterAddedAt: 0,
              votedAt: 0,
              collaboratorAddedAt: 0,
              notesAddedAt: 0,
              subscribedAt: 0,
              lastReadSectionName: "b7a8",
              lastReadVersionId: "c7799c5309cc",
              lastReadAt: 1536824114098,
              lastReadParagraphName: "2111",
              lastReadPercentage: 0.08,
              viewedAt: 1536824131207,
              presentedCountInResponseManagement: 0,
              clapCount: 0,
              seriesUpdateNotifsOptedInAt: 0,
              queuedAt: 0,
              seriesFirstViewedAt: 0,
              presentedCountInStream: 44,
              seriesLastViewedAt: 0,
              audioProgressSec: 0
            },
            usersBySocialRecommends: [],
            noIndex: false,
            recommends: 1,
            isBookmarked: false,
            tags: [
              {
                slug: "angular",
                name: "Angular",
                postCount: 4394,
                virtuals: { isFollowing: false },
                metadata: {
                  followerCount: 1610,
                  postCount: 4394,
                  coverImage: {
                    id: "0*2FNo1Wxk0kZX0QoH.png",
                    originalWidth: 700,
                    originalHeight: 387,
                    isFeatured: true
                  }
                },
                type: "Tag"
              },
              {
                slug: "typescript",
                name: "Typescript",
                postCount: 3118,
                virtuals: { isFollowing: false },
                metadata: {
                  followerCount: 2198,
                  postCount: 3118,
                  coverImage: {
                    id: "1*luZBAP5jAeQXIoKDlm2Lqg.jpeg",
                    originalWidth: 3024,
                    originalHeight: 4032,
                    isFeatured: true
                  }
                },
                type: "Tag"
              }
            ],
            socialRecommendsCount: 0,
            responsesCreatedCount: 0,
            links: {
              entries: [
                { url: "https://angular.io/about/", alts: [], httpStatus: 200 },
                {
                  url: "http://learnfrom.onlineedu.in/angular/cli",
                  alts: [],
                  httpStatus: 200
                },
                {
                  url: "http://learnfrom.onlineedu.in/angular/cli/ng-new",
                  alts: [],
                  httpStatus: 200
                }
              ],
              version: "0.3",
              generatedAt: 1536824131368
            },
            isLockedPreviewOnly: false,
            takeoverId: "",
            metaDescription:
              "Here after a few RC releases Angular version 4.0.0 — invisible-makeover — is now available. This is a major release, and is backwards compatible with 2.x.x for most applications. Some major…",
            totalClapCount: 1,
            sectionCount: 1,
            readingList: 0,
            topics: []
          },
          coverless: true,
          slug: "whats-new-in-angular-4",
          translationSourcePostId: "",
          translationSourceCreatorId: "",
          isApprovedTranslation: false,
          inResponseToPostId: "",
          inResponseToRemovedAt: 0,
          isTitleSynthesized: false,
          allowResponses: true,
          importedUrl: "",
          importedPublishedAt: 0,
          visibility: 0,
          uniqueSlug: "new-in-angular-4-43b0be187386",
          previewContent: {
            bodyModel: {
              paragraphs: [
                {
                  name: "previewImage",
                  type: 4,
                  text: "",
                  layout: 10,
                  metadata: {
                    id: "1*2WqwLom36otbBqnZJn44Ww.png",
                    originalWidth: 1435,
                    originalHeight: 440
                  }
                },
                {
                  name: "previewTitle",
                  type: 3,
                  text: "What’s new in Angular v4?",
                  alignment: 1
                },
                {
                  name: "previewSubtitle",
                  type: 13,
                  text:
                    "Here after a few RC releases Angular version 4.0.0 — invisible-makeover — is…",
                  alignment: 1
                }
              ],
              sections: [{ startIndex: 0 }]
            },
            isFullContent: false,
            subtitle:
              "Here after a few RC releases Angular version 4.0.0 — invisible-makeover — is now available."
          },
          license: 7,
          inResponseToMediaResourceId: "",
          canonicalUrl: "",
          approvedHomeCollectionId: "",
          newsletterId: "",
          webCanonicalUrl: "",
          mediumUrl: "",
          migrationId: "",
          notifyFollowers: true,
          notifyTwitter: false,
          isSponsored: false,
          isRequestToPubDisabled: false,
          notifyFacebook: false,
          responseHiddenOnParentPostAt: 0,
          isSeries: false,
          isSubscriptionLocked: false,
          seriesLastAppendedAt: 0,
          audioVersionDurationSec: 0,
          sequenceId: "",
          isNsfw: false,
          isEligibleForRevenue: false,
          isBlockedFromHightower: false,
          deletedAt: 0,
          lockedPostSource: 0,
          hightowerMinimumGuaranteeStartsAt: 0,
          hightowerMinimumGuaranteeEndsAt: 0,
          featureLockRequestAcceptedAt: 0,
          featureLockRequestMinimumGuaranteeAmount: 0,
          isElevate: false,
          mongerRequestType: 1,
          layerCake: 0,
          socialTitle: "",
          socialDek: "",
          editorialPreviewTitle: "",
          editorialPreviewDek: "",
          type: "Post"
        }
      },
      Social: {
        "55402caf559c": {
          userId: "55402caf559c",
          targetUserId: "55402caf559c",
          type: "Social"
        }
      },
      SocialStats: {
        "55402caf559c": {
          userId: "55402caf559c",
          usersFollowedCount: 12,
          usersFollowedByCount: 6,
          type: "SocialStats"
        }
      }
    },
    paging: {
      path: "https://medium.com/_/api/users/55402caf559c/profile/stream",
      next: {
        limit: 10,
        to: "1490693411237",
        source: "latest",
        ignoredIds: [],
        page: 1,
        collectionId: "null"
      }
    }
  },
  v: 3,
  b: "34899-e9ef7b0"
};
 */
