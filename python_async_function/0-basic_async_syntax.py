#!/usr/bin/env python3
"""
Module to use Python - Async
"""
import asyncio
import random


async def wait_random(max_delay: int = 10):
    """
    Function to use async / await
    Args:
        max_delay (int): Max delay (default: 10)
    Returns:
        float: Random delay between 0 and max_delay
    """

    delay: float = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
