"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  debounceMs?: number;
}

export function SearchBar({
  onSearch,
  placeholder = "컴포넌트 검색...",
  debounceMs = 300,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // debounce 타이머 정리
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // debounce 적용
    debounceTimerRef.current = setTimeout(() => {
      onSearch?.(query);
    }, debounceMs);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [query, onSearch, debounceMs]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleClear = () => {
    setQuery("");
    onSearch?.("");
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-muted rounded"
            aria-label="검색어 지우기"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>
        )}
      </div>
    </div>
  );
}

