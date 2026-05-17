var ScenarioMatrixBundle = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // frontend/scenario_matrix/index.js
  var index_exports = {};
  __export(index_exports, {
    renderScenarioMatrix: () => renderScenarioMatrix
  });
  var BOARD = {
    width: 1162,
    height: 820,
    cellWidth: 374,
    cellHeight: 260,
    gap: 20
  };
  var DIMENSION_ORDER = ["\u8D22\u52A1", "\u5BA2\u6237", "\u6280\u672F", "\u7EC4\u7EC7"];
  var DEFAULT_CONFIG = {
    title: "\u8F66\u8054\u5929\u4E0B\u4E09\u9636\u6BB5\u60C5\u666F\u5F71\u54CD\u77E9\u9635",
    subtitle: "\u628A 1Y / 3Y / 5Y \u4E0E\u4E50\u89C2 / \u57FA\u51C6 / \u60B2\u89C2\u4EA4\u53C9\uFF0C\u89C2\u5BDF\u8D22\u52A1\u3001\u5BA2\u6237\u3001\u6280\u672F\u3001\u7EC4\u7EC7\u56DB\u7EF4\u5F71\u54CD\u3002\u771F\u6B63\u5173\u952E\u7684\u4E0D\u662F\u4E5D\u4E2A\u5B64\u7ACB\u683C\u5B50\uFF0C\u800C\u662F\u54EA\u4E9B\u65E9\u671F\u8282\u70B9\u4F1A\u6253\u5F00\u6216\u526A\u6389\u540E\u7EED\u8DEF\u5F84\u3002",
    sourceNote: "\u6E90\u8868\uFF1ABook1.xlsx | \u4E09\u6BB5\u65F6\u95F4 \xD7 \u4E09\u79CD\u60C5\u666F \xD7 \u56DB\u7EF4\u5F71\u54CD",
    dimensions: DIMENSION_ORDER,
    horizons: [
      { key: "1Y", label: "1Y", description: "\u73B0\u91D1\u6D41\u4E0E IPO \u7A97\u53E3" },
      { key: "3Y", label: "3Y", description: "\u6D77\u5916\u5316\u4E0E\u5BA2\u6237\u7ED3\u6784" },
      { key: "5Y", label: "5Y", description: "\u5E73\u53F0\u4F4D\u4E0E\u7EC4\u7EC7\u5F62\u6001" }
    ],
    stances: [
      { key: "\u4E50\u89C2", label: "\u4E50\u89C2", tone: "upside", description: "\u4E0A\u884C\u7A81\u7834" },
      { key: "\u57FA\u51C6", label: "\u57FA\u51C6", tone: "base", description: "\u7A33\u6001\u5EF6\u7EED" },
      { key: "\u60B2\u89C2", label: "\u60B2\u89C2", tone: "downside", description: "\u4E0B\u884C\u538B\u529B" }
    ],
    records: [
      {
        horizon: "1Y",
        stance: "\u4E50\u89C2",
        impacts: {
          \u8D22\u52A1: "IPO \u6210\u529F\uFF0C\u8425\u6536 ~33-35 \u4EBF\uFF0C\u8DD1\u9053\u5EF6\u81F3 2029",
          \u5BA2\u6237: "\u5947\u745E\u653E\u91CF\uFF0C\u96C6\u4E2D\u5EA6\u4ECD 95%+",
          \u6280\u672F: "8797 \u4E2D\u592E\u8BA1\u7B97\u5BFB\u5F97\u9996\u4E2A\u5B9A\u70B9",
          \u7EC4\u7EC7: "\u6D77\u5916\u56E2\u961F\u542F\u52A8\u62DB\u52DF"
        }
      },
      {
        horizon: "1Y",
        stance: "\u57FA\u51C6",
        impacts: {
          \u8D22\u52A1: "\u8425\u6536 ~30 \u4EBF\uFF0C\u4E8F\u635F ~2.5 \u4EBF\u6301\u5E73",
          \u5BA2\u6237: "\u96C6\u4E2D\u5EA6 95%+ \u672A\u6539\u5584",
          \u6280\u672F: "Deep Fusion EEA \u4ECD\u662F\u300C\u67B6\u6784\u5148\u4E8E\u8BA2\u5355\u300D",
          \u7EC4\u7EC7: "\u7F57\u9A6C\u5C3C\u4E9A\u5904\u9009\u5740/\u6CE8\u518C\u671F"
        }
      },
      {
        horizon: "1Y",
        stance: "\u60B2\u89C2",
        impacts: {
          \u8D22\u52A1: "IPO \u9047\u963B\uFF0C\u73B0\u91D1\u544A\u6025",
          \u5BA2\u6237: "\u5947\u745E\u5E74\u964D\u4FB5\u8680\u6BDB\u5229",
          \u6280\u672F: "\u7814\u53D1\u6295\u5165\u88AB\u8FEB\u6536\u7F29",
          \u7EC4\u7EC7: "\u6D77\u5916\u8BA1\u5212\u51BB\u7ED3"
        }
      },
      {
        horizon: "3Y",
        stance: "\u4E50\u89C2",
        impacts: {
          \u8D22\u52A1: "\u6D77\u5916\u5360\u6BD4 25-30%\uFF0C2028-29 \u8FD1\u626D\u4E8F",
          \u5BA2\u6237: "\u96C6\u4E2D\u5EA6\u964D\u81F3 ~85%",
          \u6280\u672F: "\u4E2D\u592E\u8BA1\u7B97\u91CF\u4EA7\uFF0C\u6BDB\u5229\u7ED3\u6784\u5347\u7EA7",
          \u7EC4\u7EC7: "\u6D77\u5916\u80FD\u529B\u95ED\u73AF\u6210\u578B"
        }
      },
      {
        horizon: "3Y",
        stance: "\u57FA\u51C6",
        impacts: {
          \u8D22\u52A1: "\u8425\u6536 ~45 \u4EBF\uFF0C\u4ECD\u5728\u76C8\u4E8F\u7EBF\u6323\u624E",
          \u5BA2\u6237: "\u96C6\u4E2D\u5EA6 ~88-90%\uFF0C\u4ECD\u968F\u8F66\u51FA\u6D77",
          \u6280\u672F: "\u8231\u9A7E\u878D\u5408\u91CF\u4EA7\uFF0CA \u72EC\u7ACB\u672A\u7A81\u7834",
          \u7EC4\u7EC7: "\u603B\u90E8-\u6D77\u5916\u63A5\u53E3\u78E8\u5408\u4E2D"
        }
      },
      {
        horizon: "3Y",
        stance: "\u60B2\u89C2",
        impacts: {
          \u8D22\u52A1: "\u73B0\u91D1\u94FE\u65AD\u88C2\u98CE\u9669",
          \u5BA2\u6237: "\u5947\u745E\u5206\u6D41\uFF0C\u8DCC\u51FA\u524D\u4E94",
          \u6280\u672F: "\u7B2C\u4E09\u8DF3\u4E2D\u592E\u8BA1\u7B97\u300C\u8DF3\u4E0D\u52A8\u300D",
          \u7EC4\u7EC7: "\u7B2C\u4E8C\u8DF3\u5168\u7403\u5316\u5931\u8D25"
        }
      },
      {
        horizon: "5Y",
        stance: "\u4E50\u89C2",
        impacts: {
          \u8D22\u52A1: "\u6D77\u5916\u5360\u6BD4 >35%\uFF0C\u7A33\u5B9A\u76C8\u5229",
          \u5BA2\u6237: "\u96C6\u4E2D\u5EA6 <75%\uFF0C\u6B27\u6D32 OEM \u76F4\u4F9B\u7A81\u7834",
          \u6280\u672F: "\u4E2D\u592E\u8BA1\u7B97\u4E2D\u56FD\u524D\u4E09",
          \u7EC4\u7EC7: "\u7ED3\u6784\u578B\u516C\u53F8\u8F6C\u578B\u6210\u529F"
        }
      },
      {
        horizon: "5Y",
        stance: "\u57FA\u51C6",
        impacts: {
          \u8D22\u52A1: "\u5FAE\u5229\u7A33\u6001",
          \u5BA2\u6237: "\u533A\u57DF\u5DE5\u7A0B\u4F9B\u5E94\u5546\u5BA2\u6237\u7ED3\u6784",
          \u6280\u672F: "\u5DE5\u7A0B\u4F9B\u5E94\u5546\u5B9A\u4F4D\u9501\u5B9A",
          \u7EC4\u7EC7: "\u7EC4\u7EC7\u72EC\u7ACB\u4F46\u751F\u6001\u5C42\u65E0\u724C"
        }
      },
      {
        horizon: "5Y",
        stance: "\u60B2\u89C2",
        impacts: {
          \u8D22\u52A1: "\u88AB\u5E76\u8D2D / \u8FB9\u7F18\u5316",
          \u5BA2\u6237: "\u5BA2\u6237\u57FA\u7840\u74E6\u89E3",
          \u6280\u672F: "\u6CA6\u4E3A\u9AD8\u901A\u751F\u6001\u53EF\u66FF\u4EE3\u8282\u70B9",
          \u7EC4\u7EC7: "\u7EC4\u7EC7\u89E3\u6784"
        }
      }
    ],
    paths: [
      {
        id: "breakthrough",
        label: "\u7ED3\u6784\u6027\u8DC3\u8FC1\u8DEF\u5F84",
        tone: "upside",
        viability: "viable",
        nodes: ["1Y|\u4E50\u89C2", "3Y|\u4E50\u89C2", "5Y|\u4E50\u89C2"],
        thesis: "IPO \u6210\u529F\u5EF6\u957F\u73B0\u91D1\u8DD1\u9053\uFF0C\u6D77\u5916\u4E0E\u4E2D\u592E\u8BA1\u7B97\u540C\u65F6\u5151\u73B0\uFF0C\u6700\u7EC8\u5F62\u6210\u5E73\u53F0\u578B\u516C\u53F8\u3002"
      },
      {
        id: "survive",
        label: "\u7A33\u6001\u751F\u5B58\u8DEF\u5F84",
        tone: "base",
        viability: "viable",
        nodes: ["1Y|\u57FA\u51C6", "3Y|\u57FA\u51C6", "5Y|\u57FA\u51C6"],
        thesis: "\u8BA2\u5355\u4E0E\u7EC4\u7EC7\u6CA1\u6709\u65AD\u88C2\uFF0C\u4F46\u5BA2\u6237\u7ED3\u6784\u548C\u751F\u6001\u4F4D\u6CA1\u6709\u5B9E\u8D28\u8DC3\u8FC1\uFF0C\u8D70\u5411\u5FAE\u5229\u7A33\u6001\u3002"
      },
      {
        id: "compression",
        label: "\u9AD8\u5F00\u540E\u538B\u7F29\u8DEF\u5F84",
        tone: "mixed",
        viability: "conditional",
        nodes: ["1Y|\u4E50\u89C2", "3Y|\u57FA\u51C6", "5Y|\u57FA\u51C6"],
        thesis: "\u65E9\u671F\u878D\u8D44\u6216\u8BA2\u5355\u987A\u5229\uFF0C\u4F46\u6D77\u5916\u80FD\u529B\u548C\u6280\u672F\u5E73\u53F0\u5316\u4E0D\u8DB3\uFF0C\u540E\u7EED\u88AB\u538B\u56DE\u5DE5\u7A0B\u4F9B\u5E94\u5546\u4E0A\u9650\u3002"
      },
      {
        id: "cash-cut",
        label: "\u73B0\u91D1\u5931\u5B88\u526A\u679D",
        tone: "downside",
        viability: "pruned",
        nodes: ["1Y|\u60B2\u89C2", "3Y|\u60B2\u89C2", "5Y|\u60B2\u89C2"],
        thesis: "IPO \u4E0E\u73B0\u91D1\u6D41\u5148\u5931\u5B88\u540E\uFF0C\u7814\u53D1\u3001\u6D77\u5916\u3001\u5BA2\u6237\u591A\u6761\u540E\u7EED\u8DEF\u5F84\u88AB\u540C\u6B65\u526A\u6389\u3002"
      },
      {
        id: "base-fall",
        label: "\u57FA\u51C6\u8F6C\u4E0B\u884C\u526A\u679D",
        tone: "warning",
        viability: "pruned",
        nodes: ["1Y|\u57FA\u51C6", "3Y|\u60B2\u89C2", "5Y|\u60B2\u89C2"],
        thesis: "\u521D\u671F\u6CA1\u6709\u5D29\u76D8\uFF0C\u4F46\u5BA2\u6237\u5206\u6D41\u6216\u7B2C\u4E09\u8DF3\u5931\u8D25\u4F1A\u628A 5Y \u7EC8\u5C40\u63A8\u5411\u8FB9\u7F18\u5316\u3002"
      }
    ],
    pruningNotes: [
      {
        title: "\u73B0\u91D1\u95E8\u69DB",
        text: "1Y \u82E5 IPO \u9047\u963B\u5E76\u73B0\u91D1\u544A\u6025\uFF0C3Y \u7684\u4E2D\u592E\u8BA1\u7B97\u91CF\u4EA7\u4E0E\u6D77\u5916\u95ED\u73AF\u57FA\u672C\u88AB\u526A\u679D\u3002",
        tone: "downside"
      },
      {
        title: "\u5BA2\u6237\u7ED3\u6784\u95E8\u69DB",
        text: "3Y \u82E5\u4ECD\u9AD8\u5EA6\u4F9D\u8D56\u5947\u745E\uFF0C5Y \u5373\u4F7F\u6D3B\u4E0B\u6765\u4E5F\u66F4\u50CF\u533A\u57DF\u5DE5\u7A0B\u4F9B\u5E94\u5546\uFF0C\u800C\u4E0D\u662F\u5E73\u53F0\u516C\u53F8\u3002",
        tone: "base"
      },
      {
        title: "\u6280\u672F\u8DC3\u8FC1\u95E8\u69DB",
        text: "8797 \u9996\u4E2A\u5B9A\u70B9\u53EA\u662F\u5165\u53E3\uFF0C\u771F\u6B63\u51B3\u5B9A\u4E0A\u884C\u7684\u662F\u4E2D\u592E\u8BA1\u7B97\u80FD\u5426\u91CF\u4EA7\u5E76\u8FDB\u5165\u4E2D\u56FD\u524D\u4E09\u3002",
        tone: "upside"
      }
    ]
  };
  var EMPHASIS_RULES = [
    {
      className: "emphasis risk",
      expression: /IPO 遇阻|现金告急|现金链断裂风险|被并购|边缘化|冻结|收缩|分流|跌出前五|跳不动|失败|瓦解|沦为|可替代|解构|未改善|无牌/g
    },
    {
      className: "emphasis upside",
      expression: /IPO 成功|首个定点|海外团队启动招募|海外能力闭环成型|稳定盈利|直供突破|中国前三|结构型公司转型成功|扭亏|量产|毛利结构升级|放量/g
    },
    {
      className: "emphasis tech",
      expression: /8797|Deep Fusion EEA|中央计算|舱驾融合|高通生态|A 独立/g
    },
    {
      className: "emphasis metric",
      expression: /~?\d+(?:\.\d+)?(?:-\d+(?:\.\d+)?)?\s*(?:亿|%)?\+?|[<>]\s*\d+%|前五|前三|第二跳|第三跳|2028-29|2029/g
    },
    {
      className: "emphasis customer",
      expression: /奇瑞|欧洲 OEM|客户|集中度|随车出海|区域工程供应商/g
    }
  ];
  function escapeHtml(value) {
    return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
  }
  function nodeKey(horizon, stance) {
    return `${horizon}|${stance}`;
  }
  function normalizeList(items, fallback, key = "key") {
    if (!Array.isArray(items) || items.length === 0) return fallback;
    return items.map((item) => typeof item === "string" ? { [key]: item, label: item } : item);
  }
  function normalizeConfig(userConfig = {}) {
    const merged = {
      ...DEFAULT_CONFIG,
      ...userConfig,
      dimensions: userConfig.dimensions || DEFAULT_CONFIG.dimensions,
      horizons: normalizeList(userConfig.horizons, DEFAULT_CONFIG.horizons),
      stances: normalizeList(userConfig.stances, DEFAULT_CONFIG.stances),
      records: userConfig.records || DEFAULT_CONFIG.records,
      paths: userConfig.paths || DEFAULT_CONFIG.paths,
      pruningNotes: userConfig.pruningNotes || DEFAULT_CONFIG.pruningNotes
    };
    merged.horizonOrder = merged.horizons.map((item) => item.key);
    merged.stanceOrder = merged.stances.map((item) => item.key);
    merged.recordMap = new Map(merged.records.map((record) => [nodeKey(record.horizon, record.stance), record]));
    merged.horizonMeta = new Map(merged.horizons.map((item) => [item.key, item]));
    merged.stanceMeta = new Map(merged.stances.map((item) => [item.key, item]));
    return merged;
  }
  function findHighlights(text) {
    const ranges = [];
    EMPHASIS_RULES.forEach((rule, priority) => {
      const expression = new RegExp(rule.expression.source, "g");
      let match = expression.exec(text);
      while (match) {
        if (match[0]) {
          ranges.push({
            start: match.index,
            end: match.index + match[0].length,
            className: rule.className,
            priority
          });
        }
        match = expression.exec(text);
      }
    });
    return ranges.sort((a, b) => a.start - b.start || a.priority - b.priority || b.end - a.end).reduce((accepted, range) => {
      const overlaps = accepted.some((item) => range.start < item.end && range.end > item.start);
      if (!overlaps) accepted.push(range);
      return accepted;
    }, []).sort((a, b) => a.start - b.start);
  }
  function emphasizeText(value) {
    const text = String(value ?? "");
    const highlights = findHighlights(text);
    if (highlights.length === 0) return escapeHtml(text);
    let cursor = 0;
    const parts = [];
    highlights.forEach((range) => {
      parts.push(escapeHtml(text.slice(cursor, range.start)));
      parts.push(`<span class="${range.className}">${escapeHtml(text.slice(range.start, range.end))}</span>`);
      cursor = range.end;
    });
    parts.push(escapeHtml(text.slice(cursor)));
    return parts.join("");
  }
  function getTone(config, stance) {
    return config.stanceMeta.get(stance)?.tone || "base";
  }
  function getNodePosition(config, node) {
    const [horizon, stance] = node.split("|");
    const columnIndex = Math.max(0, config.horizonOrder.indexOf(horizon));
    const rowIndex = Math.max(0, config.stanceOrder.indexOf(stance));
    const x = columnIndex * (BOARD.cellWidth + BOARD.gap) + BOARD.cellWidth / 2;
    const y = rowIndex * (BOARD.cellHeight + BOARD.gap) + BOARD.cellHeight / 2;
    return { x, y };
  }
  function pathToCurve(points) {
    if (points.length === 0) return "";
    const [first, ...rest] = points;
    return rest.reduce((path, point, index) => {
      const previous = points[index];
      const distance = Math.max(82, Math.abs(point.x - previous.x) * 0.38);
      return `${path} C ${previous.x + distance} ${previous.y}, ${point.x - distance} ${point.y}, ${point.x} ${point.y}`;
    }, `M ${first.x} ${first.y}`);
  }
  function getNodePathIds(paths, targetNode) {
    return paths.filter((path) => path.nodes.includes(targetNode)).map((path) => path.id);
  }
  function deriveNodeRole(record) {
    if (record.role) return record.role;
    if (record.stance === "\u4E50\u89C2" && record.horizon === "1Y") return "\u6253\u5F00\u4E3B\u8DEF\u5F84";
    if (record.stance === "\u4E50\u89C2" && record.horizon === "3Y") return "\u9A8C\u8BC1\u8DC3\u8FC1";
    if (record.stance === "\u4E50\u89C2" && record.horizon === "5Y") return "\u5E73\u53F0\u7EC8\u5C40";
    if (record.stance === "\u57FA\u51C6") return "\u53EF\u751F\u5B58\u4F46\u4E0A\u9650\u53D7\u9650";
    return "\u526A\u679D\u538B\u529B\u8282\u70B9";
  }
  function renderTimeline(config) {
    return `
    <div class="timeline-head" aria-hidden="true">
      ${config.horizons.map(
      (item) => `
            <div class="timeline-head-cell">
              <strong>${escapeHtml(item.label || item.key)}</strong>
              <span>${escapeHtml(item.description || "")}</span>
            </div>
          `
    ).join("")}
    </div>
  `;
  }
  function renderRowLabels(config) {
    return `
    <div class="stance-rail" aria-hidden="true">
      ${config.stances.map(
      (item) => `
            <div class="stance-label tone-${escapeHtml(item.tone || "base")}">
              <strong>${escapeHtml(item.label || item.key)}</strong>
              <span>${escapeHtml(item.description || "")}</span>
            </div>
          `
    ).join("")}
    </div>
  `;
  }
  function renderImpactRows(config, record) {
    const impacts = record.impacts || {};
    return config.dimensions.map(
      (dimension) => `
        <div class="impact-row">
          <span>${escapeHtml(dimension)}</span>
          <p>${emphasizeText(impacts[dimension] || "\u2014")}</p>
        </div>
      `
    ).join("");
  }
  function renderCard(config, horizon, stance) {
    const key = nodeKey(horizon, stance);
    const record = config.recordMap.get(key) || { horizon, stance, impacts: {} };
    const tone = getTone(config, stance);
    const nodePathIds = getNodePathIds(config.paths, key).join(" ");
    return `
    <article class="matrix-card tone-${escapeHtml(tone)}" data-node="${escapeHtml(key)}" data-path-ids="${escapeHtml(nodePathIds)}">
      <div class="card-topline">
        <span class="stage">${escapeHtml(horizon)}</span>
        <strong>${escapeHtml(stance)}</strong>
      </div>
      <div class="impact-list">
        ${renderImpactRows(config, record)}
      </div>
      <div class="node-role">${escapeHtml(deriveNodeRole(record))}</div>
    </article>
  `;
  }
  function renderCards(config) {
    return config.stanceOrder.flatMap((stance) => config.horizonOrder.map((horizon) => renderCard(config, horizon, stance))).join("");
  }
  function renderPathLayer(config) {
    return `
    <svg class="path-layer" viewBox="0 0 ${BOARD.width} ${BOARD.height}" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <filter id="pathGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur"></feGaussianBlur>
          <feMerge>
            <feMergeNode in="blur"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
      </defs>
      ${config.paths.map((path) => {
      const points = path.nodes.map((node) => getNodePosition(config, node));
      return `
            <path class="dependency-path tone-${escapeHtml(path.tone)} viability-${escapeHtml(path.viability)}" data-path-id="${escapeHtml(path.id)}" d="${pathToCurve(points)}"></path>
            ${points.map(
        (point, index) => `
                  <circle class="dependency-node tone-${escapeHtml(path.tone)} viability-${escapeHtml(path.viability)}" data-path-id="${escapeHtml(path.id)}" cx="${point.x}" cy="${point.y}" r="${index === 0 ? 9 : 7}"></circle>
                `
      ).join("")}
          `;
    }).join("")}
    </svg>
  `;
  }
  function renderPathControls(config) {
    return `
    <div class="path-controls" aria-label="\u8DEF\u5F84\u7B5B\u9009">
      <button class="path-chip is-active" type="button" data-focus-path="all">
        <span class="chip-line tone-all"></span>
        \u5168\u90E8\u8DEF\u5F84
      </button>
      ${config.paths.map(
      (path) => `
            <button class="path-chip" type="button" data-focus-path="${escapeHtml(path.id)}">
              <span class="chip-line tone-${escapeHtml(path.tone)}"></span>
              ${escapeHtml(path.label)}
            </button>
          `
    ).join("")}
    </div>
  `;
  }
  function renderPathLegend(config) {
    return `
    <div class="path-legend">
      ${config.paths.map(
      (path) => `
            <div class="path-legend-item tone-${escapeHtml(path.tone)} viability-${escapeHtml(path.viability)}" data-path-id="${escapeHtml(path.id)}">
              <div>
                <strong>${escapeHtml(path.label)}</strong>
                <span>${escapeHtml(path.viability === "viable" ? "\u53EF\u8D70\u901A" : path.viability === "conditional" ? "\u6709\u6761\u4EF6\u8D70\u901A" : "\u88AB\u526A\u679D")}</span>
              </div>
              <p>${escapeHtml(path.thesis)}</p>
            </div>
          `
    ).join("")}
    </div>
  `;
  }
  function renderPruningNotes(config) {
    return `
    <div class="pruning-panel">
      <h2>\u526A\u679D\u5224\u65AD</h2>
      <div class="pruning-list">
        ${config.pruningNotes.map(
      (item) => `
              <section class="pruning-note tone-${escapeHtml(item.tone || "base")}">
                <strong>${escapeHtml(item.title)}</strong>
                <p>${emphasizeText(item.text)}</p>
              </section>
            `
    ).join("")}
      </div>
    </div>
  `;
  }
  function setActivePath(root, config, pathId) {
    const selectedPath = config.paths.find((path) => path.id === pathId);
    const selectedNodes = new Set(selectedPath?.nodes || []);
    root.dataset.activePath = pathId;
    root.querySelectorAll("[data-focus-path]").forEach((button) => {
      const isActive = button.dataset.focusPath === pathId;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    root.querySelectorAll("[data-path-id]").forEach((element) => {
      const isMuted = pathId !== "all" && element.dataset.pathId !== pathId;
      element.classList.toggle("is-muted", isMuted);
      element.classList.toggle("is-focused", pathId !== "all" && element.dataset.pathId === pathId);
    });
    root.querySelectorAll(".matrix-card").forEach((card) => {
      const node = card.dataset.node;
      const isCurrent = selectedNodes.has(node);
      card.classList.toggle("is-muted", pathId !== "all" && !isCurrent);
      card.classList.toggle("is-current", pathId !== "all" && isCurrent);
    });
  }
  function attachInteractions(root, config) {
    root.querySelectorAll("[data-focus-path]").forEach((button) => {
      button.addEventListener("click", () => {
        setActivePath(root, config, button.dataset.focusPath || "all");
      });
    });
    setActivePath(root, config, "all");
  }
  function renderScenarioMatrix(container, userConfig = {}) {
    if (!container) return;
    const config = normalizeConfig(userConfig);
    container.innerHTML = `
    <section class="scenario-matrix-component" aria-label="${escapeHtml(config.title)}" data-active-path="all">
      <header class="matrix-header">
        <div class="title-block">
          <p class="source-note">${escapeHtml(config.sourceNote || "")}</p>
          <h1>${escapeHtml(config.title)}</h1>
          <p class="subtitle">${escapeHtml(config.subtitle || "")}</p>
        </div>
        <aside class="legend-block">
          ${renderPathControls(config)}
          ${renderPathLegend(config)}
        </aside>
      </header>
      <div class="matrix-layout">
        <div class="timeline-offset"></div>
        ${renderTimeline(config)}
        ${renderRowLabels(config)}
        <div class="matrix-viewport">
          ${renderPathLayer(config)}
          <div class="matrix-grid" style="--cell-height:${BOARD.cellHeight}px;--cell-gap:${BOARD.gap}px;">
            ${renderCards(config)}
          </div>
        </div>
      </div>
      ${renderPruningNotes(config)}
    </section>
  `;
    attachInteractions(container.querySelector(".scenario-matrix-component"), config);
    window.__scenarioMatrixReady = true;
  }
  function boot() {
    const target = document.querySelector("[data-scenario-matrix]");
    renderScenarioMatrix(target, window.SCENARIO_MATRIX_CONFIG || {});
  }
  if (typeof window !== "undefined") {
    window.ScenarioMatrix = {
      defaultConfig: DEFAULT_CONFIG,
      renderScenarioMatrix
    };
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", boot, { once: true });
    } else {
      boot();
    }
  }
  return __toCommonJS(index_exports);
})();
