import { ComponentDetailConfig } from "./types";
import {
  PaginationBasicExample,
  PaginationSizesExample,
  PaginationVariantsExample,
  PaginationBoundaryExample,
} from "@/features/showcase/lib/examples/pagination-examples";

export const paginationConfig: ComponentDetailConfig = {
  slug: "pagination",
  designNote: [
    "Pagination 컴포넌트는 페이지네이션을 제공합니다.",
    "기본적으로 variant: 'text', size: 'small', shape: 'circular', siblingCount: 1, boundaryCount: 1이 설정되어 있으며, 이전/다음 버튼에 DesignIcon(ChevronRightThin, ChevronLeftThin)을 사용합니다.",
    "항목 간 간격(gap: 4px)과 패딩(padding: 4px 0)이 커스터마이징되어 있습니다.",
  ],
  usageExamples: [
    {
      title: "기본 사용 예제",
      section: "basic",
      render: PaginationBasicExample,
      code: `import { useState } from "react";
import { Stack, Pagination, Typography } from "@/core/design-systems";

export function PaginationBasicExample() {
  const [page, setPage] = useState(1);

  return (
    <Stack direction="column" spacing={2}>
      <Typography>현재 페이지: {page}</Typography>
      <Pagination
        count={10}
        page={page}
        onChange={(_, value) => setPage(value)}
      />
    </Stack>
  );
}`,
    },
    {
      title: "Sizes",
      section: "variants",
      render: PaginationSizesExample,
      code: `import { useState } from "react";
import { Stack, Pagination, Typography } from "@/core/design-systems";

export function PaginationSizesExample() {
  const [page, setPage] = useState(1);

  return (
    <Stack direction="column" spacing={3}>
      <Stack direction="column" spacing={1}>
        <Typography variant="body/body2">Small</Typography>
        <Pagination
          count={10}
          page={page}
          onChange={(_, value) => setPage(value)}
          size="small"
        />
      </Stack>
      <Stack direction="column" spacing={1}>
        <Typography variant="body/body2">Medium</Typography>
        <Pagination
          count={10}
          page={page}
          onChange={(_, value) => setPage(value)}
          size="medium"
        />
      </Stack>
      <Stack direction="column" spacing={1}>
        <Typography variant="body/body2">Large</Typography>
        <Pagination
          count={10}
          page={page}
          onChange={(_, value) => setPage(value)}
          size="large"
        />
      </Stack>
    </Stack>
  );
}`,
    },
    {
      title: "Variants",
      section: "variants",
      render: PaginationVariantsExample,
      code: `import { useState } from "react";
import { Stack, Pagination, Typography } from "@/core/design-systems";

export function PaginationVariantsExample() {
  const [page, setPage] = useState(1);

  return (
    <Stack direction="column" spacing={3}>
      <Stack direction="column" spacing={1}>
        <Typography variant="body/body2">Text (기본값)</Typography>
        <Pagination
          count={10}
          page={page}
          onChange={(_, value) => setPage(value)}
          variant="text"
        />
      </Stack>
      <Stack direction="column" spacing={1}>
        <Typography variant="body/body2">Outlined</Typography>
        <Pagination
          count={10}
          page={page}
          onChange={(_, value) => setPage(value)}
          variant="outlined"
        />
      </Stack>
    </Stack>
  );
}`,
    },
    {
      title: "Boundary Count",
      section: "variants",
      render: PaginationBoundaryExample,
      code: `import { useState } from "react";
import { Stack, Pagination, Typography } from "@/core/design-systems";

export function PaginationBoundaryExample() {
  const [page, setPage] = useState(1);

  return (
    <Stack direction="column" spacing={3}>
      <Stack direction="column" spacing={1}>
        <Typography variant="body/body2">
          siblingCount: 1, boundaryCount: 1 (기본값)
        </Typography>
        <Pagination
          count={20}
          page={page}
          onChange={(_, value) => setPage(value)}
          siblingCount={1}
          boundaryCount={1}
        />
      </Stack>
      <Stack direction="column" spacing={1}>
        <Typography variant="body/body2">
          siblingCount: 2, boundaryCount: 2
        </Typography>
        <Pagination
          count={20}
          page={page}
          onChange={(_, value) => setPage(value)}
          siblingCount={2}
          boundaryCount={2}
        />
      </Stack>
    </Stack>
  );
}`,
    },
  ],
  customization: {
    defaultValueChanges: [
      {
        prop: "variant",
        customValue: "'text'",
        muiDefault: "'text'",
        note: "text variant를 기본값으로 사용합니다.",
      },
      {
        prop: "size",
        customValue: "'small'",
        muiDefault: "'medium'",
        note: "small size를 기본값으로 사용합니다.",
      },
      {
        prop: "shape",
        customValue: "'circular'",
        muiDefault: "'circular'",
        note: "circular shape를 기본값으로 사용합니다.",
      },
      {
        prop: "siblingCount",
        customValue: "1",
        muiDefault: "1",
        note: "현재 페이지 양쪽에 표시할 페이지 수를 1로 설정합니다.",
      },
      {
        prop: "boundaryCount",
        customValue: "1",
        muiDefault: "1",
        note: "시작/끝에 표시할 페이지 수를 1로 설정합니다.",
      },
      {
        prop: "renderItem",
        customValue:
          "(props) => <PaginationItem slots={{ next: <DesignIcon variant='ChevronRightThin' />, previous: <DesignIcon variant='ChevronLeftThin' /> }} {...props} />",
        muiDefault: "기본 PaginationItem",
        note: "이전/다음 버튼에 DesignIcon(ChevronRightThin, ChevronLeftThin)을 사용하도록 커스터마이징했습니다.",
      },
    ],
    styleChanges: [
      {
        description:
          "항목 간 간격을 4px로 설정하고 flexWrap을 nowrap으로 설정하여 항목들이 한 줄에 표시되도록 했습니다.",
        code: "'& > .MuiPagination-ul': { gap: '4px', flexWrap: 'nowrap' }",
      },
      {
        description:
          "상하 패딩을 4px 0으로 설정하여 컴포넌트의 세로 간격을 조정했습니다.",
        code: "padding: '4px 0'",
      },
    ],
  },
};

