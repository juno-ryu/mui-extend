"use client";

import { useState } from "react";
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
}

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
}

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
}

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
}

