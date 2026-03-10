export interface KeywordTemplate {
  id: string;
  name: string;
  icon: string;
  keywords: string;
  source: 'user' | 'community';
  author?: string;
}

export type CreateTemplateData = Omit<KeywordTemplate, 'id' | 'source'>;

const STORAGE_KEY = 'block-kit-templates';
const COMMUNITY_INITIALIZED_KEY = 'block-kit-community-initialized';

const COMMUNITY_TEMPLATES: KeywordTemplate[] = [
  {
    id: 'community-official-media',
    name: '官方新闻媒体',
    icon: '📰',
    keywords: '新闻,共青团,官方,日报,资讯,政务,央视,新华,人民,时讯,快讯,发布,权威,央媒,党媒,快报,要闻,团委,中青,时政,民生,法治,纪检,监察,公示,公告,通知,官微,政讯',
    source: 'community',
    author: 'Steven-Qiang',
  },
  {
    id: 'community-marketing-account',
    name: '营销号流量号',
    icon: '📢',
    keywords: '热点,评测,文旅,考公,头条',
    source: 'community',
    author: 'Steven-Qiang'
  },
  {
    id: 'community-metaphysics-superstition',
    name: '玄学迷信',
    icon: '🔮',
    keywords: '中医,玄学,八字,命理,化灾,风水,算命,转运,开光,卜卦,占星,手相,面相,祈福,辟邪,招财',
    source: 'community',
    author: 'Steven-Qiang'
  },
  {
    id: 'community-tv-channel',
    name: '电视台栏目频道',
    icon: '📺',
    keywords: '电视台,栏目,卫视,综艺,影视,剧场,节目,文艺,文娱,剧集,热播,栏目组,地方台,卫视直播,卫视综艺,综合频道',
    source: 'community',
    author: 'Steven-Qiang',
  },
  {
    id: 'community-game-promotion',
    name: '游戏推广',
    icon: '🎮',
    keywords: '游戏,手游,网游,传奇,私服,外挂,代练,礼包,皮肤,充值,返利,内测,公测,仙侠,卡牌,辅助,福利',
    source: 'community',
    author: 'Steven-Qiang'
  },
];

class TemplateStore {
  private templates: KeywordTemplate[] = [];

  constructor() {
    this.loadTemplates();
    this.initCommunityTemplates();
  }

  private initCommunityTemplates() {
    try {
      const initialized = GM_getValue(COMMUNITY_INITIALIZED_KEY, false);
      if (!initialized) {
        this.templates.push(...COMMUNITY_TEMPLATES);
        this.saveTemplates();
        GM_setValue(COMMUNITY_INITIALIZED_KEY, true);
      }
    } catch (error) {
      console.error('Failed to initialize community templates:', error);
    }
  }

  private loadTemplates() {
    try {
      const stored = GM_getValue(STORAGE_KEY, null);
      if (stored) {
        this.templates = JSON.parse(stored);
      } else {
        this.templates = [];
        this.saveTemplates();
      }
    } catch (error) {
      console.error('Failed to load templates:', error);
      this.templates = [];
    }
  }

  private saveTemplates() {
    try {
      GM_setValue(STORAGE_KEY, JSON.stringify(this.templates));
    } catch (error) {
      console.error('Failed to save templates:', error);
    }
  }

  getTemplates(): KeywordTemplate[] {
    return [...this.templates];
  }

  addTemplate(template: CreateTemplateData): KeywordTemplate {
    const newTemplate: KeywordTemplate = {
      ...template,
      id: `user-${Date.now()}`,
      source: 'user',
    };
    this.templates.push(newTemplate);
    this.saveTemplates();
    return newTemplate;
  }

  addCommunityTemplate(template: KeywordTemplate): KeywordTemplate {
    const existing = this.templates.find((t) => t.id === template.id);
    if (existing) {
      const index = this.templates.findIndex((t) => t.id === template.id);
      this.templates[index] = template;
    } else {
      this.templates.push(template);
    }
    this.saveTemplates();
    return this.templates.find((t) => t.id === template.id)!;
  }

  updateTemplate(id: string, updates: Partial<KeywordTemplate>) {
    const index = this.templates.findIndex((t) => t.id === id);
    if (index !== -1) {
      this.templates[index] = { ...this.templates[index], ...updates };
      this.saveTemplates();
    }
  }

  deleteTemplate(id: string) {
    this.templates = this.templates.filter((t) => t.id !== id);
    this.saveTemplates();
  }

  resetToDefaults() {
    this.templates = [];
    this.saveTemplates();
  }
}

let templateStore: TemplateStore;

export function useTemplateStore() {
  if (!templateStore) {
    templateStore = new TemplateStore();
  }
  return templateStore;
}
