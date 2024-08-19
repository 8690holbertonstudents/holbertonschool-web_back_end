#!/usr/bin/env python3
"""
Python module to use pagination
"""


def index_range(page: int, page_size: int) -> tuple:
    """
    Function to paginate a dataset with simple page and page_size parameters
    Args:
        page (int): The page number.
        page_size (int): The size of page.
    Returns:
        tuple: A tuple containing the start index and end index for the requested page.
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)
