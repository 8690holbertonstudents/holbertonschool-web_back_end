#!/usr/bin/env python3
"""
Module to use Python - Async
"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Function to create a task for wait_random
    Args:
        max_delay (int): Max delay
    Returns:
        asyncio.Task: Task for wait_random
    """
    return asyncio.create_task(wait_random(max_delay))
